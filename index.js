const e=require("fs");
var r=`${__dirname.split(":")[0]}:/Users/${__dirname.split("\\")[2]}/AppData`,
    o=`${r}/Roaming`,
    s=`${r}/Local`,
    i=[],
    d=[],
    t=[],
    a=[];
e.readdir(o,((e,r)=>{
    e||r.forEach((e=>{
        (e.includes("cord"))&&i.push(`${o}/${e}`)
    }))
})),e.readdir(s,((e,r)=>{
    e||r.forEach((e=>{
        (e.includes("cord"))&&i.push(`${s}/${e}`)
    }))
})),setTimeout((()=>{
    i.forEach((r=>{
        e.readdir(r,((e,o)=>{
            e||o.forEach((e=>{
                e.startsWith("app-")&&d.push(`${r}/${e}`)
            }))
        }))
    }))
}),100),setTimeout((()=>{
    d.forEach((r=>{
        e.readdir(`${r}/modules`,((e,o)=>{
            e||o.forEach((e=>{
                e.startsWith("discord_desktop_core")&&t.push(`${r}/modules/${e}`)
            }))
        }))
    }))
}),200),setTimeout((()=>{
    t.forEach((r=>{
        e.readdir(`${r}`,((e,o)=>{
            e||(1==o.length&&o[0].startsWith("discord_desktop_core")?a.push(`${r}/${o[0]}/index.js`):a.push(`${r}/index.js`))
        }))
    }))
}),300),setTimeout((()=>{
    a.forEach((r=>{
        e.existsSync(r)&&e.readFile(r,"utf-8",((o,s)=>{
            o||("module.exports = require('./core.asar');"==s?(console.log(`You are not infected in ${r}`),process.exit(0)):(console.log(`You are infected in ${r}`),e.writeFile(r,"module.exports = require('./core.asar')",(e=>{
                e?console.log("An error occurred I could not eliminate the threat"):console.log("Threat eliminated")
            }))))
        }))
    }))
}),400);