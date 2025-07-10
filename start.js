#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Loop项目启动脚本');
console.log('====================================');

// 检查Node.js版本
function checkNodeVersion() {
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  
  console.log(`📦 Node.js版本: ${nodeVersion}`);
  
  if (majorVersion < 16) {
    console.error('❌ 错误: 需要Node.js 16.0或更高版本');
    console.log('请访问 https://nodejs.org/ 更新Node.js');
    process.exit(1);
  } else {
    console.log('✅ Node.js版本符合要求');
  }
}

// 检查包管理器
function checkPackageManager() {
  try {
    execSync('npm --version', { stdio: 'ignore' });
    console.log('✅ npm已安装');
    return 'npm';
  } catch (error) {
    try {
      execSync('yarn --version', { stdio: 'ignore' });
      console.log('✅ yarn已安装');
      return 'yarn';
    } catch (error) {
      console.error('❌ 错误: 没有找到npm或yarn');
      process.exit(1);
    }
  }
}

// 检查项目依赖
function checkDependencies(packageManager) {
  const nodeModulesPath = path.join(process.cwd(), 'node_modules');
  
  if (!fs.existsSync(nodeModulesPath)) {
    console.log('📦 开始安装依赖...');
    try {
      execSync(`${packageManager} install`, { stdio: 'inherit' });
      console.log('✅ 依赖安装完成');
    } catch (error) {
      console.error('❌ 依赖安装失败');
      process.exit(1);
    }
  } else {
    console.log('✅ 依赖已安装');
  }
}

// 检查视频资源
function checkVideoResources() {
  const videoDir = path.join(process.cwd(), '视频资源');
  
  if (!fs.existsSync(videoDir)) {
    console.log('⚠️  警告: 未找到视频资源文件夹');
    console.log('请确保 "视频资源" 文件夹存在并包含必要的视频文件');
  } else {
    const files = fs.readdirSync(videoDir);
    const videoFiles = files.filter(file => file.endsWith('.mp4'));
    console.log(`✅ 找到 ${videoFiles.length} 个视频文件`);
  }
}

// 启动开发服务器
function startDevServer(packageManager) {
  console.log('🌟 启动开发服务器...');
  console.log('====================================');
  
  const child = spawn(packageManager, ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });

  child.on('error', (error) => {
    console.error('❌ 启动失败:', error);
  });

  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`❌ 进程退出，代码: ${code}`);
    }
  });

  // 处理进程退出
  process.on('SIGINT', () => {
    console.log('\n👋 正在关闭服务器...');
    child.kill('SIGINT');
    process.exit(0);
  });
}

// 主函数
async function main() {
  try {
    checkNodeVersion();
    const packageManager = checkPackageManager();
    checkDependencies(packageManager);
    checkVideoResources();
    
    console.log('====================================');
    console.log('🎉 环境检查完成，准备启动服务器');
    console.log('💡 提示: 按 Ctrl+C 停止服务器');
    console.log('🌐 服务器启动后，请访问 http://localhost:3000');
    console.log('====================================');
    
    // 等待2秒后启动
    setTimeout(() => {
      startDevServer(packageManager);
    }, 2000);
    
  } catch (error) {
    console.error('❌ 启动失败:', error.message);
    process.exit(1);
  }
}

main(); 