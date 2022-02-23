module.exports = {
    name: "ready",
    once: true,
    excute(client) {
          console.log(`${client.user.username} đã bắt đầu hoạt động!!!`);
    
          client.user.setActivity({
             name: "Bot đang được phát triển bởi HieuHapHoi",
             type: 'PLAYING'
      });
    }
}