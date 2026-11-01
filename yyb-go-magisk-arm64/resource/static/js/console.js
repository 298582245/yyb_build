const navItems = [
  ["dashboard", "仪表盘", "/dashboard", "grid"],
  ["accounts", "账号管理", "/account-management", "users"],
  ["settings", "系统配置", "/system-settings", "sliders"],
  ["debug", "调用调试", "/debug", "terminal"],
  ["logs", "请求日志", "/request-logs", "list"],
  ["mapping", "名称映射", "/name-mapping", "tag"]
];

const iconPaths = {
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  sliders: '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/><line x1="4" y1="12" x2="20" y2="12"/><circle cx="8" cy="6" r="2" fill="currentColor" stroke="none"/><circle cx="16" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="10" cy="18" r="2" fill="currentColor" stroke="none"/>',
  terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
  list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
  tag: '<path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3H4a1 1 0 0 0-1 1v5.59A2 2 0 0 0 3.59 11l9.58 9.59a2 2 0 0 0 2.83 0l4.59-4.59a2 2 0 0 0 0-2.83Z"/><line x1="7" y1="7" x2="7.01" y2="7"/>',
  refresh: '<path d="M20 11a8.1 8.1 0 0 0-14.5-4.9L3 9"/><path d="M3 4v5h5"/><path d="M4 13a8.1 8.1 0 0 0 14.5 4.9L21 15"/><path d="M21 20v-5h-5"/>',
  sync: '<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  pulse: '<polyline points="3 12 7 12 10 4 14 20 17 12 21 12"/>',
  trend: '<polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  trash: '<polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6m3 0V3h8v3"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4"/>',
  info: '<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="7" x2="12.01" y2="7"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zm4 4h3v3h-3zm-4 0h1v3h-1z"/>',
  arrowLeft: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'
};

const state = { accounts: [], mappings: [], logs: [], logTotal: 0, logToday: 0, logOffset: 0, logLimit: 50, lastResult: "" };
const $ = id => document.getElementById(id);
const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.grid}</svg>`;
const escapeHTML = value => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

function renderNavigation() {
  const markup = navItems.map(([id, label, href, glyph]) => `<a class="nav-item" data-nav="${id}" href="${href}"><span class="nav-icon">${icon(glyph)}</span><span>${label}</span></a>`).join("");
  if ($("desktopNav")) $("desktopNav").innerHTML = markup;
  if ($("mobileNav")) $("mobileNav").innerHTML = markup;
  const current = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach(item => item.classList.toggle("active", item.dataset.nav === current));
}

async function api(method, url, body) {
  const options = { method, headers: { "Content-Type": "application/json" } };
  if (body !== undefined) options.body = JSON.stringify(body);
  const response = await fetch(url, options);
  const text = await response.text();
  let data;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  const envelope = data && typeof data === "object" && !Array.isArray(data) && "code" in data && "msg" in data && "data" in data;
  if (!response.ok || (envelope && data.code !== 0)) { const error = new Error(envelope ? data.msg : `HTTP ${response.status}`); error.status = response.status; error.data = envelope ? data.data : data; throw error; }
  return envelope ? data.data : data;
}

function showToast(message, isError = false) { const toast = $("toast"); if (!toast) return; toast.textContent = message; toast.classList.toggle("error", isError); toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800); }
function accountName(account) { return account.nickname || account.alias || account.openid || "未命名账号"; }
function accountStatus(account) { return account.status === "alive" ? "alive" : account.status === "expired" ? "expired" : "unknown"; }
function statusText(status) { return status === "alive" ? "可用" : status === "expired" ? "需重扫" : "待确认"; }
function formatChecked(timestamp) { if (!timestamp) return "未检测"; return new Date(timestamp * 1000).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }); }
function avatar(account) { const initial = escapeHTML(accountName(account).slice(0, 1).toUpperCase() || "Y"); return `<span class="avatar"><img src="/accounts/avatar?ref=${encodeURIComponent(account.openid)}" alt="" onerror="this.classList.add('bad')"><span>${initial}</span></span>`; }
function renderStats() { if ($("onlineMetric")) $("onlineMetric").textContent = state.accounts.filter(account => account.status === "alive").length; if ($("totalMetric")) $("totalMetric").textContent = state.accounts.length; if ($("todayMetric")) $("todayMetric").textContent = state.logToday; if ($("totalRequestsMetric")) $("totalRequestsMetric").textContent = state.logTotal; }
function renderDashboardAccounts() { const root = $("dashboardAccounts"); if (!root) return; root.innerHTML = state.accounts.length ? `<div class="account-preview">${state.accounts.slice(0, 5).map(account => `<div class="preview-row">${avatar(account)}<div><div class="person-name">${escapeHTML(accountName(account))}</div><div class="person-meta">${escapeHTML(account.openid)} · ${formatChecked(account.last_checked_at)}</div></div><span class="status ${accountStatus(account)}">${statusText(accountStatus(account))}</span></div>`).join("")}</div>` : `<div class="empty"><div><strong>还没有账号</strong><span>扫码添加第一个微信账号</span></div></div>`; }
function accountActions(account) { const ref = escapeHTML(account.openid); return `<div class="table-actions"><button class="icon-button" title="刷新状态" data-refresh-account="${ref}">${icon("refresh")}<span class="sr-only">刷新状态</span></button><button class="icon-button danger" title="删除账号" data-delete-account="${ref}">${icon("trash")}<span class="sr-only">删除账号</span></button></div>`; }
function renderAccountList() {
  const table = $("accountTableBody"); const cards = $("accountCards"); if (!table || !cards) return;
  const meta = $("accountListMeta"); if (meta) meta.textContent = `${state.accounts.length} 个账号 · ${state.accounts.filter(account => account.status === "alive").length} 个可用`;
  if (!state.accounts.length) { const empty = `<div class="empty"><div><strong>暂无账号</strong><span>点击右上角“添加账号”开始扫码</span></div></div>`; table.innerHTML = `<tr><td colspan="6">${empty}</td></tr>`; cards.innerHTML = empty; }
  else { table.innerHTML = state.accounts.map(account => `<tr><td><div class="account-cell">${avatar(account)}<div><div class="person-name">${escapeHTML(accountName(account))}</div><div class="person-meta">${escapeHTML(account.openid)}</div></div></div></td><td><span class="status ${accountStatus(account)}">${statusText(accountStatus(account))}</span></td><td class="id-cell">${escapeHTML(account.uin ?? "-")}</td><td class="request-count">${Number(account.request_count || 0).toLocaleString("zh-CN")}</td><td class="person-meta">${formatChecked(account.last_checked_at)}</td><td>${accountActions(account)}</td></tr>`).join(""); cards.innerHTML = state.accounts.map(account => `<article class="account-card"><div class="card-top"><div class="account-cell">${avatar(account)}<div><div class="person-name">${escapeHTML(accountName(account))}</div><div class="person-meta">${escapeHTML(account.openid)}</div></div></div><span class="status ${accountStatus(account)}">${statusText(accountStatus(account))}</span></div><div class="card-meta"><span>UID：${escapeHTML(account.uin ?? "-")}</span><span>总请求：${Number(account.request_count || 0).toLocaleString("zh-CN")}</span><span>最近检查：${formatChecked(account.last_checked_at)}</span></div><div class="card-actions"><button class="button secondary" data-refresh-account="${escapeHTML(account.openid)}">${icon("refresh")}刷新状态</button><button class="button danger" data-delete-account="${escapeHTML(account.openid)}">${icon("trash")}删除</button></div></article>`).join(""); }
  document.querySelectorAll("[data-refresh-account]").forEach(button => button.addEventListener("click", () => refreshAccount(button.dataset.refreshAccount))); document.querySelectorAll("[data-delete-account]").forEach(button => button.addEventListener("click", () => deleteAccount(button.dataset.deleteAccount)));
}
function populateDebugAccounts() { const select = $("debugAccount"); if (!select) return; select.innerHTML = state.accounts.length ? state.accounts.map(account => `<option value="${escapeHTML(account.openid)}">${escapeHTML(accountName(account))} · ${escapeHTML(account.openid)}</option>`).join("") : `<option value="">暂无账号</option>`; }
async function loadAccounts() { try { state.accounts = await api("GET", "/accounts"); renderStats(); renderDashboardAccounts(); renderAccountList(); populateDebugAccounts(); } catch (error) { showToast(`账号加载失败：${error.message}`, true); } }
function formatEast8(timestamp) { const date = new Date(timestamp * 1000 + 8 * 60 * 60 * 1000); const pad = value => String(value).padStart(2, "0"); return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`; }
function mappingName(appID) { return state.mappings.find(item => item.app_id === appID)?.name || appID || "-"; }
function renderLogs() {
  const rows = $("requestLogRows"); const cards = $("requestLogCards"); if (!rows || !cards) return;
  const query = ($("logSearch")?.value || "").trim().toLowerCase();
  const filtered = state.logs.filter(item => [item.path, item.method, item.source_ip, item.account_name, item.app_id, mappingName(item.app_id), item.status, item.note].join(" ").toLowerCase().includes(query));
  $("logTodayCount").textContent = state.logToday; $("logTotalCount").textContent = state.logTotal; $("logVisibleCount").textContent = filtered.length; $("logMappingCount").textContent = state.mappings.length;
  const start = state.logTotal === 0 ? 0 : state.logOffset + 1; const end = state.logOffset + state.logs.length;
  $("logPageMeta").textContent = `${start}-${end} / ${state.logTotal} 条`;
  $("logPageLabel").textContent = `第 ${Math.floor(state.logOffset / state.logLimit) + 1} 页`;
  $("previousLogsBtn").disabled = state.logOffset <= 0;
  $("nextLogsBtn").disabled = state.logOffset + state.logs.length >= state.logTotal;
  const statusMarkup = status => `<span class="http-status ${status === 200 ? "" : status >= 300 && status < 400 ? "redirect" : "error"}">${escapeHTML(status)}</span>`;
  const rowsHTML = filtered.map(item => `<tr><td class="log-path-cell"><span class="log-path-text" title="${escapeHTML(item.path)}">${escapeHTML(item.path)}</span></td><td><span class="method-tag">${escapeHTML(item.method || "-")}</span></td><td>${statusMarkup(item.status)}</td><td class="log-source-ip">${escapeHTML(item.source_ip || "-")}</td><td title="${escapeHTML(item.app_id || "")}">${escapeHTML(mappingName(item.app_id))}</td><td>${escapeHTML(item.account_name || "-")}</td><td>${formatEast8(item.requested_at)}</td><td>${item.note ? `<button class="button secondary log-detail-button" type="button" data-view-log-note="${escapeHTML(item.note)}" title="查看完整备注">${icon("eye")}查看备注</button>` : "-"}</td></tr>`).join("");
  const cardsHTML = filtered.map(item => `<article class="log-card"><div class="log-card-head"><div class="log-card-request"><span class="method-tag">${escapeHTML(item.method || "-")}</span><button class="log-path-mobile" type="button" data-view-log-path="${escapeHTML(item.path)}" title="查看完整路径"><span>${escapeHTML(item.path)}</span></button></div>${statusMarkup(item.status)}</div><div class="log-card-grid"><span><strong>来源 IP</strong>${escapeHTML(item.source_ip || "-")}</span><span><strong>请求小程序</strong>${escapeHTML(mappingName(item.app_id))}</span><span><strong>请求账号</strong>${escapeHTML(item.account_name || "-")}</span><span><strong>请求时间 (UTC+8)</strong>${formatEast8(item.requested_at)}</span></div>${item.note ? `<button class="button secondary log-detail-button" type="button" data-view-log-note="${escapeHTML(item.note)}" title="查看完整备注">${icon("eye")}查看备注</button>` : ""}</article>`).join("");
  rows.innerHTML = rowsHTML || `<tr><td colspan="8"><div class="empty"><div><strong>${query ? "没有匹配记录" : "暂无请求记录"}</strong><span>${query ? "调整筛选条件后再试" : "接口请求会自动出现在这里"}</span></div></div></td></tr>`;
  cards.innerHTML = cardsHTML || `<div class="empty"><div><strong>${query ? "没有匹配记录" : "暂无请求记录"}</strong><span>${query ? "调整筛选条件后再试" : "接口请求会自动出现在这里"}</span></div></div>`;
  document.querySelectorAll("[data-view-log-note]").forEach(button => button.addEventListener("click", () => openRequestDetail("请求备注", button.dataset.viewLogNote)));
  document.querySelectorAll("[data-view-log-path]").forEach(button => button.addEventListener("click", () => openRequestDetail("请求路径", button.dataset.viewLogPath)));
}
function openRequestDetail(title, content) { $("requestDetailTitle").textContent = title; $("requestDetailContent").textContent = content; $("requestDetailDialog").showModal(); }
async function loadMappings() { try { state.mappings = await api("GET", "/api/name-mappings"); renderMappingList(); renderLogs(); } catch (error) { showToast(`名称映射加载失败：${error.message}`, true); } }
async function loadRequestLogs() { try { const result = await api("GET", `/api/request-logs?limit=${state.logLimit}&offset=${state.logOffset}`); state.logs = result.items || []; state.logTotal = result.total || 0; state.logToday = result.today || 0; renderLogs(); renderStats(); } catch (error) { showToast(`请求日志加载失败：${error.message}`, true); } }
async function refreshLogs() { await Promise.all([loadRequestLogs(), loadMappings()]); }
function renderMappingList() {
  const rows = $("mappingRows"); const cards = $("mappingCards"); if (!rows || !cards) return;
  const query = ($("mappingSearch")?.value || "").trim().toLowerCase();
  const filtered = state.mappings.filter(item => `${item.app_id} ${item.name} ${item.remark}`.toLowerCase().includes(query));
  $("mappingCount").textContent = `${state.mappings.length} 个映射`;
  const tableRows = filtered.map(item => `<tr><td class="mapping-name">${escapeHTML(item.name)}</td><td class="mapping-appid">${escapeHTML(item.app_id)}</td><td class="mapping-count">${Number(item.request_count || 0).toLocaleString("zh-CN")}</td><td class="mapping-remark">${item.remark ? escapeHTML(item.remark) : "-"}</td><td><div class="mapping-actions"><button class="button secondary" data-edit-mapping="${escapeHTML(item.app_id)}"><span data-icon="edit"></span>修改</button><button class="button danger mapping-delete" data-delete-mapping="${escapeHTML(item.app_id)}"><span data-icon="trash"></span>删除</button></div></td></tr>`).join("");
  const mobileCards = filtered.map(item => `<article class="mapping-card"><div class="mapping-card-head"><strong class="mapping-name">${escapeHTML(item.name)}</strong><span class="mapping-count">${Number(item.request_count || 0).toLocaleString("zh-CN")} 次</span></div><div class="mapping-appid">${escapeHTML(item.app_id)}</div><div class="mapping-remark">${item.remark ? escapeHTML(item.remark) : "无备注"}</div><div class="mapping-actions"><button class="button secondary" data-edit-mapping="${escapeHTML(item.app_id)}"><span data-icon="edit"></span>修改</button><button class="button danger mapping-delete" data-delete-mapping="${escapeHTML(item.app_id)}"><span data-icon="trash"></span>删除</button></div></article>`).join("");
  rows.innerHTML = tableRows || `<tr><td colspan="5"><div class="empty"><div><strong>${query ? "没有匹配映射" : "暂无名称映射"}</strong><span>${query ? "调整筛选条件后再试" : "添加 APPID 和小程序名称"}</span></div></div></td></tr>`;
  cards.innerHTML = mobileCards || `<div class="empty"><div><strong>${query ? "没有匹配映射" : "暂无名称映射"}</strong><span>${query ? "调整筛选条件后再试" : "添加 APPID 和小程序名称"}</span></div></div>`;
  document.querySelectorAll("[data-icon]").forEach(element => { if (!element.querySelector("svg")) element.innerHTML = icon(element.dataset.icon); });
  document.querySelectorAll("[data-delete-mapping]").forEach(button => button.addEventListener("click", () => deleteMapping(button.dataset.deleteMapping)));
  document.querySelectorAll("[data-edit-mapping]").forEach(button => button.addEventListener("click", () => openMappingDialog(state.mappings.find(item => item.app_id === button.dataset.editMapping))));
}
function openMappingDialog(mapping = null) { $("mappingForm").reset(); $("mappingOriginalAppID").value = mapping?.app_id || ""; $("mappingAppID").value = mapping?.app_id || ""; $("mappingName").value = mapping?.name || ""; $("mappingRemark").value = mapping?.remark || ""; $("mappingDialogTitle").textContent = mapping ? "修改名称映射" : "添加名称映射"; $("mappingSubmitLabel").textContent = mapping ? "保存修改" : "添加映射"; $("mappingSubmitIcon").innerHTML = icon(mapping ? "edit" : "plus"); $("mappingDialog").showModal(); $("mappingAppID").focus(); }
async function saveMapping(event) { event.preventDefault(); const oldAppID = $("mappingOriginalAppID").value; const appID = $("mappingAppID").value.trim(); const name = $("mappingName").value.trim(); const remark = $("mappingRemark").value.trim(); if (!appID || !name) return; try { await api(oldAppID ? "PUT" : "POST", oldAppID ? `/api/name-mappings/${encodeURIComponent(oldAppID)}` : "/api/name-mappings", { app_id: appID, name, remark }); $("mappingForm").reset(); $("mappingDialog").close(); await loadMappings(); showToast(oldAppID ? "名称映射已修改" : "名称映射已添加"); } catch (error) { showToast(`保存失败：${error.message}`, true); } }
async function deleteMapping(appID) { const mapping = state.mappings.find(item => item.app_id === appID); if (!mapping || !confirm(`删除“${mapping.name}”的 APPID 映射？`)) return; try { await api("DELETE", `/api/name-mappings/${encodeURIComponent(appID)}`); await loadMappings(); showToast("名称映射已删除"); } catch (error) { showToast(`删除失败：${error.message}`, true); } }
async function refreshAccount(ref) { try { await api("POST", "/accounts/refresh", { ref }); await loadAccounts(); showToast("账号状态已刷新"); } catch (error) { showToast(`刷新失败：${error.message}`, true); } }
async function deleteAccount(ref) { const account = state.accounts.find(item => item.openid === ref); if (!account || !confirm(`确认删除账号“${accountName(account)}”？\n删除后需要重新扫码添加。`)) return; try { await api("DELETE", `/accounts?ref=${encodeURIComponent(ref)}`); await loadAccounts(); showToast("账号已删除"); } catch (error) { showToast(`删除失败：${error.message}`, true); } }
async function refreshAll() { const button = $("refreshAllBtn"); button.disabled = true; try { await api("POST", "/accounts/refresh"); await loadAccounts(); showToast("全部账号状态已刷新"); } catch (error) { showToast(`刷新失败：${error.message}`, true); } finally { button.disabled = false; } }
async function resyncAll() { const button = $("resyncAllBtn"); button.disabled = true; try { await api("POST", "/accounts/resync"); await loadAccounts(); showToast("账号资料已同步"); } catch (error) { showToast(`同步失败：${error.message}`, true); } finally { button.disabled = false; } }
let accountQrSession = ""; let accountQrPollTimer = null; let accountQrCountdownTimer = null; let accountQrSeconds = 0; let accountQrConfirming = false;
function stopAccountQrTimers() { clearInterval(accountQrPollTimer); clearInterval(accountQrCountdownTimer); accountQrPollTimer = null; accountQrCountdownTimer = null; }
function setAccountQrStatus(message, stateName = "pending") { const status = $("accountQrStatus"); status.textContent = message; status.dataset.state = stateName; }
async function createAccountQr() {
  stopAccountQrTimers(); accountQrSession = ""; accountQrConfirming = false; $("accountQrResult").classList.remove("visible"); $("accountQrResult").textContent = ""; $("accountQrWrap").innerHTML = "<span>正在获取二维码…</span>"; $("accountQrCountdown").textContent = ""; setAccountQrStatus("正在获取二维码…");
  try {
    const result = await api("POST", "/qr"); accountQrSession = result.session_id; $("accountQrWrap").innerHTML = `<img src="${escapeHTML(result.image_url)}?t=${Date.now()}" alt="扫码添加账号二维码">`; setAccountQrStatus("等待扫码");
    accountQrSeconds = 110; const updateCountdown = () => { $("accountQrCountdown").textContent = `二维码 ${accountQrSeconds}s 后自动刷新`; accountQrSeconds--; if (accountQrSeconds < 0) createAccountQr(); }; updateCountdown(); accountQrCountdownTimer = setInterval(updateCountdown, 1000); accountQrPollTimer = setInterval(pollAccountQr, 1500);
  } catch (error) { setAccountQrStatus(`获取二维码失败：${error.message}`, "error"); }
}
async function pollAccountQr() {
  if (!accountQrSession) return;
  try {
    const result = await api("GET", `/qr/${encodeURIComponent(accountQrSession)}/poll`);
    if (result.status === "scanned") setAccountQrStatus("已扫码，请在手机上确认", "scanned");
    else if (["authorized", "confirmed"].includes(result.status) && !accountQrConfirming) {
      accountQrConfirming = true; stopAccountQrTimers(); setAccountQrStatus("授权成功，正在保存账号…", "scanned");
      const account = await api("POST", `/qr/${encodeURIComponent(accountQrSession)}/confirm`); accountQrSession = ""; setAccountQrStatus("账号已添加", "success"); $("accountQrCountdown").textContent = ""; $("accountQrWrap").innerHTML = "<span class=\"qr-check\">✓</span>";
      const accountResult = $("accountQrResult"); accountResult.innerHTML = `<strong>${escapeHTML(account.nickname || account.alias || account.openid || "账号已添加")}</strong><span>${escapeHTML(account.openid || "")}</span>`; accountResult.classList.add("visible"); await loadAccounts(); showToast("账号已添加");
    } else if (["expired", "unknown"].includes(result.status)) { setAccountQrStatus("二维码已失效，正在重新生成…", "error"); createAccountQr(); }
    else if (result.status === "cancelled") { stopAccountQrTimers(); setAccountQrStatus("扫码已取消，请重新生成", "error"); $("accountQrCountdown").textContent = ""; }
  } catch (error) { if (error.status === 404) { stopAccountQrTimers(); setAccountQrStatus("二维码已失效，请重新生成", "error"); } }
}
function closeAccountQr() { stopAccountQrTimers(); accountQrSession = ""; accountQrConfirming = false; $("accountQrDialog").close(); }
function setResult(value, meta, isError = false) { const text = typeof value === "string" ? value : JSON.stringify(value, null, 2); state.lastResult = text; $("resultBox").textContent = text; $("resultBox").classList.toggle("error", isError); $("resultMeta").textContent = meta || "已更新"; }
async function callFeature() { const ref = $("debugAccount").value; const endpoint = $("featureSelect").value; const appID = $("appIDInput").value.trim(); if (!ref) return setResult("请先添加并选择账号。", "缺少账号", true); if (!appID) return setResult("请输入 APPID。", "缺少 APPID", true); const body = { ref, app_id: appID }; if (endpoint === "operateWxData") { try { body.payload = JSON.parse($("payloadInput").value.trim()); } catch { return setResult("请求 JSON 格式不正确。", "解析失败", true); } } const button = $("callBtn"); button.disabled = true; const started = performance.now(); setResult("调用中，首次调用可能需要建立会话。", "请求进行中"); try { const result = await api("POST", `/wxapp/${endpoint}`, body); setResult(result, `调用完成 · ${((performance.now() - started) / 1000).toFixed(1)}s`); await loadAccounts(); } catch (error) { setResult(error.data || error.message, `调用失败 ${error.status || ""}`.trim(), true); } finally { button.disabled = false; } }
async function loadHealth() { const sidebar = $("sidebarHealth"); const mobile = $("mobileHealth"); try { await api("GET", "/health"); if (sidebar) { sidebar.classList.remove("bad"); sidebar.querySelector("span:last-child").textContent = "服务正常"; } if (mobile) mobile.querySelector("span:last-child").textContent = "在线"; } catch { if (sidebar) { sidebar.classList.add("bad"); sidebar.querySelector("span:last-child").textContent = "服务异常"; } if (mobile) mobile.querySelector("span:last-child").textContent = "离线"; } }
async function loadSettings() { try { const data = await api("GET", "/settings"); $("tokenDisplay").value = data.api_token_set ? data.api_token : "（未设置）"; if (data.env_password_set) { $("changePasswordBtn").disabled = true; $("changePasswordBtn").title = "密码由环境变量控制"; } if (data.env_token_set) { $("setTokenBtn").disabled = true; $("setTokenBtn").title = "Token 由环境变量控制"; } } catch { $("tokenDisplay").value = "加载失败"; } }
async function savePassword() { const oldPassword = $("oldPassword").value; const password = $("newPassword").value; if (!oldPassword || password.length < 4) return showToast("请输入原密码，新密码至少 4 位", true); try { await api("POST", "/settings", { password, old_password: oldPassword }); $("passwordPanel").classList.add("hidden"); showToast("密码已更新"); } catch (error) { showToast(`密码修改失败：${error.message}`, true); } }
async function saveToken() { const apiToken = $("tokenInput").value.trim(); if (!apiToken) return showToast("Token 不能为空", true); try { await api("POST", "/settings", { api_token: apiToken }); $("tokenPanel").classList.add("hidden"); $("tokenInput").value = ""; await loadSettings(); showToast("API Token 已更新"); } catch (error) { showToast(`Token 更新失败：${error.message}`, true); } }

function initPage() {
  renderNavigation(); document.querySelectorAll("[data-icon]").forEach(element => { element.innerHTML = icon(element.dataset.icon); });
  const page = document.body.dataset.page; loadHealth(); setInterval(loadHealth, 15000); if (["dashboard", "accounts", "debug"].includes(page)) loadAccounts(); if (page === "settings") loadSettings(); if (page === "dashboard") loadRequestLogs(); if (page === "logs") refreshLogs(); if (page === "mapping") loadMappings();
  if (page === "dashboard") $("refreshDashboardBtn")?.addEventListener("click", async () => { await Promise.all([loadAccounts(), loadRequestLogs(), loadHealth()]); showToast("仪表盘数据已刷新"); });
  if (page === "accounts") {
    $("reloadAccountsBtn")?.addEventListener("click", loadAccounts); $("refreshAllBtn")?.addEventListener("click", refreshAll); $("resyncAllBtn")?.addEventListener("click", resyncAll);
    document.querySelectorAll("[data-open-account-qr]").forEach(button => button.addEventListener("click", () => { $("accountQrDialog").showModal(); createAccountQr(); }));
    $("refreshAccountQrBtn")?.addEventListener("click", createAccountQr); $("cancelAccountQrBtn")?.addEventListener("click", closeAccountQr); $("closeAccountQrBtn")?.addEventListener("click", closeAccountQr);
    $("accountQrDialog")?.addEventListener("close", stopAccountQrTimers);
  }
  if (page === "logs") { $("reloadLogsBtn").addEventListener("click", refreshLogs); $("logSearch").addEventListener("input", renderLogs); $("logPageSize").addEventListener("change", async () => { state.logLimit = Number($("logPageSize").value); state.logOffset = 0; await loadRequestLogs(); }); $("previousLogsBtn").addEventListener("click", async () => { state.logOffset = Math.max(0, state.logOffset - state.logLimit); await loadRequestLogs(); }); $("nextLogsBtn").addEventListener("click", async () => { state.logOffset += state.logLimit; await loadRequestLogs(); }); $("closeRequestDetailBtn").addEventListener("click", () => $("requestDetailDialog").close()); $("dismissRequestDetailBtn").addEventListener("click", () => $("requestDetailDialog").close()); }
  if (page === "mapping") {
    $("mappingForm").addEventListener("submit", saveMapping); $("mappingSearch").addEventListener("input", renderMappingList); $("reloadMappingsBtn").addEventListener("click", loadMappings);
    document.querySelectorAll("[data-open-mapping-dialog]").forEach(button => button.addEventListener("click", () => openMappingDialog()));
    $("closeMappingDialogBtn").addEventListener("click", () => $("mappingDialog").close()); $("cancelMappingDialogBtn").addEventListener("click", () => $("mappingDialog").close());
  }
  if (page === "debug") { $("featureSelect").addEventListener("change", () => $("payloadField").classList.toggle("hidden", $("featureSelect").value !== "operateWxData")); $("callBtn").addEventListener("click", callFeature); $("clearResultBtn").addEventListener("click", () => setResult("结果已清空。", "等待调用")); $("copyResultBtn").addEventListener("click", async () => { try { await navigator.clipboard.writeText(state.lastResult || $("resultBox").textContent); showToast("结果已复制"); } catch { showToast("复制失败，请手动选择结果", true); } }); }
  if (page === "settings") { $("changePasswordBtn").addEventListener("click", () => { $("passwordPanel").classList.remove("hidden"); $("oldPassword").focus(); }); $("cancelPasswordBtn").addEventListener("click", () => $("passwordPanel").classList.add("hidden")); $("savePasswordBtn").addEventListener("click", savePassword); $("setTokenBtn").addEventListener("click", () => { $("tokenPanel").classList.remove("hidden"); $("tokenInput").focus(); }); $("cancelTokenBtn").addEventListener("click", () => $("tokenPanel").classList.add("hidden")); $("saveTokenBtn").addEventListener("click", saveToken); }
}
initPage();
