@echo off
chcp 65001 >nul
title Loop项目启动器

echo.
echo ========================================
echo 🚀 Loop项目启动脚本 (Windows)
echo ========================================
echo.

REM 检查Node.js是否安装
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误: 未找到Node.js
    echo 请访问 https://nodejs.org/ 下载并安装Node.js
    pause
    exit /b 1
) else (
    echo ✅ Node.js已安装
    node --version
)

REM 检查npm是否可用
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 错误: npm不可用
    pause
    exit /b 1
) else (
    echo ✅ npm已安装
)

REM 检查是否存在package.json
if not exist package.json (
    echo ❌ 错误: 未找到package.json文件
    echo 请确保在项目根目录运行此脚本
    pause
    exit /b 1
)

REM 检查依赖是否安装
if not exist node_modules (
    echo 📦 正在安装依赖...
    npm install
    if %errorlevel% neq 0 (
        echo ❌ 依赖安装失败
        pause
        exit /b 1
    )
    echo ✅ 依赖安装完成
) else (
    echo ✅ 依赖已安装
)

REM 检查视频资源文件夹
if exist "视频资源" (
    echo ✅ 找到视频资源文件夹
) else (
    echo ⚠️  警告: 未找到视频资源文件夹
    echo 请确保"视频资源"文件夹存在并包含必要的视频文件
)

echo.
echo ========================================
echo 🎉 环境检查完成，正在启动服务器...
echo 💡 提示: 按 Ctrl+C 停止服务器
echo 🌐 服务器启动后，请访问 http://localhost:3000
echo ========================================
echo.

REM 启动开发服务器
npm run dev

pause 