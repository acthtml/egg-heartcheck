# egg-heartcheck

用于部署时候的心跳检测。

通过在静态文件目录（`/public`）中添加或删除静态文件（`heartcheck.json`）来进行心跳检测的开
启或关闭。

```bash
  # 开启心跳检测, http://localhost:7001/public/heartcheck.json 200
  heartcheck-online

  # 关闭心跳检测, http://localhost:7001/public/heartcheck.json 404
  heartcheck-offline
```
