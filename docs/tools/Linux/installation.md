# Linux 系统安装

Dell 按 F12

遇到双系统时间错乱的问题，在 Windows 下管理员执行 `Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1` 即可。
