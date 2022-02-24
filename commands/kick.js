const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports.data = new SlashCommandBuilder()
.setName("kick")
.setDescription("kick user")
.addUserOption(option => option.setName("person").setDescription("the person to kick"))

module.exports.run = (client, interaction) => {
    let permissions = interaction.member.permissions;
    if(!permissions.has("MANANGE_MESSAGES"))
    return interaction.editReply({content: "Bạn không có quyền dùng lệnh này"})

    let member = options.getMember("person");
    if(!member) return interaction.editReply({content: "Vui lòng nhập tên người muốn kick"})

    member.kick().then(() => {
        interaction.editReply({
            content:`Người dùng ${member.displayName} đã bị kick ra khỏi server`
        }).catch(err => {
            console.log(err);
            interaction.editReply({content: "Đã xảy ra lỗi"})
        })
    })
    
}