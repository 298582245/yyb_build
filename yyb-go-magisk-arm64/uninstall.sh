#!/system/bin/sh

DATA_DIR=/data/adb/yyb-go
PID_FILE="$DATA_DIR/yyb-go.pid"

if [ -f "$PID_FILE" ]; then
    pid=$(cat "$PID_FILE")
    if [ -n "$pid" ]; then
        kill "$pid" 2>/dev/null
    fi
    rm -f "$PID_FILE"
fi

# Runtime data is intentionally preserved for reinstall/upgrade.
