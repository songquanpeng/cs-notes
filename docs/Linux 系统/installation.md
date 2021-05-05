# Linux 系统安装

Dell 按 F12

遇到双系统时间错乱的问题，在 Windows 下管理员执行 `Reg add HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d 1` 即可。

修改 grub 启动顺序：
1. `sudo vi /etc/default/grub`
2. 修改默认项和超时时间。
3. `sudo update-grub`