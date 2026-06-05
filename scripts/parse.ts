import fs from 'fs';
// import url from 'url';
import path from 'path';
import parser from "../src/parser/";

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const content =
// `
//     <section lol="kek " kek='lol'>
//         <div>
//             <a></a>
//             <span></span>
//         </div>
//     </section>
//     <div></div>
// `;
const content =
`
    <div lol="kek" class="d-flex" >
        <a href="kek.com"></a>
    </div>
    hjkjgkjk
    <div>
        kek
    </div>
`;
const parsed = parser.parse(content, 'html');

console.log(parsed.root.children);


fs.writeFileSync(path.resolve(process.cwd(), './parsed.json'), JSON.stringify(parsed.root.toArray(), undefined, '  '));
