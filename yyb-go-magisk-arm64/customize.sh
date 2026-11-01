#!/system/bin/sh

ui_print "*******************************"
ui_print "       YYB Go Magisk Module   "
ui_print "*******************************"
ui_print "Installing Android arm64 service..."

set_perm_recursive "$MODPATH" 0 0 0755 0644
set_perm "$MODPATH/yyb-go" 0 0 0755
set_perm "$MODPATH/service.sh" 0 0 0755
set_perm "$MODPATH/uninstall.sh" 0 0 0755
