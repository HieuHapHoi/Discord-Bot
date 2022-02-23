const { Events } = require("../Validations/EventNames");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table")

module.exports = async (client) => {
    const Table = new Ascii("Đã load xong các Events")

    (await PG(`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
        const event = require(file);

        if(!Events.includes(event.name) || !event.name){
            const L = file.split("/");
            await Table.addRow(`${event.name ||"MISSING"}`,`❌ Tên Event bị mất hoặc không tìm thấy: ${L[6] + '/' + L[7]}`);
            return;
        }
        if(event.once){
            client.once(event.name, (...args) => event.execute(...args, client));
        }
        else {
            client.once(event.name, (...args) => event.execute(...args, client));
        };
        
        await Table.addRow(event.name, "✔️ Thành công")
    });

    console.log(Table.toString());

}