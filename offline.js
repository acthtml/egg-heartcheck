#!/usr/bin/env node

/**
 * 下线站点
 */
const path = require('path');
const fs = require('fs-extra');

fs.remove(path.join(process.cwd(), 'public', 'heartcheck.json'))
  .then(() => {
    console.log('下线成功');
  })
  .catch(e => {
    console.log('下线失败', e);
  });
