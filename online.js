#!/usr/bin/env node

/**
 * 上线站点
 */
const path = require('path');
const fs = require('fs-extra');

fs.copy(path.join(__dirname, 'heartcheck.json'), path.join(process.cwd(), 'public', 'heartcheck.json'))
  .then(() => {
    console.log('上线成功');
  })
  .catch(e => {
    console.log('上线失败', e);
  });
