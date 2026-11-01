#!/system/bin/sh

MODDIR=${0%/*}
DATA_DIR=/data/adb/yyb-go
PID_FILE="$DATA_DIR/yyb-go.pid"
LOG_FILE="$DATA_DIR/yyb-go.log"

until [ "$(getprop sys.boot_completed)" = "1" ]; do
    sleep 2
done
sleep 3

mkdir -p "$DATA_DIR/db" "$DATA_DIR/avatars" "$DATA_DIR/qr"

# Keep runtime data outside the module so it survives module updates.
if [ ! -f "$DATA_DIR/.initialized" ]; then
    cp -af "$MODDIR/resource/templates" "$DATA_DIR/"
    cp -af "$MODDIR/resource/static" "$DATA_DIR/"
    if [ ! -f "$DATA_DIR/db/yyb.db" ] && [ -f "$MODDIR/resource/db/yyb.db" ]; then
        cp -af "$MODDIR/resource/db/yyb.db" "$DATA_DIR/db/yyb.db"
    fi
    touch "$DATA_DIR/.initialized"
fi

if [ -f "$DATA_DIR/.env" ]; then
    set -a
    . "$DATA_DIR/.env"
    set +a
fi

if [ -f "$PID_FILE" ]; then
    old_pid=$(cat "$PID_FILE")
    if [ -n "$old_pid" ] && kill -0 "$old_pid" 2>/dev/null; then
        exit 0
    fi
    rm -f "$PID_FILE"
fi

export YYB_RESOURCE_ROOT="$DATA_DIR"
export YYB_LISTEN_HOST="${YYB_LISTEN_HOST:-127.0.0.1}"
export YYB_LISTEN_PORT="${YYB_LISTEN_PORT:-8000}"

cd "$MODDIR" || exit 1
umask 022
nohup "$MODDIR/yyb-go" >> "$LOG_FILE" 2>&1 &
echo $! > "$PID_FILE"
