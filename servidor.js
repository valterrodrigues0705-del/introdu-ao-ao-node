// // const express = require("express")
// // const app = express()
// // const path = require("path");
// // const usuarios = [
// //     {
// //         nome: "Valter Rodrigues",
// //         cargo: "Desenvolvedor FullStack",
// //         contato: "(85)98453-6385",
// //     },
// //     {
// //         nome: "Antonio",
// //         cargo: "Desenvolvedor FullStack",
// //         contato: "(85)98453-6385",
// //     },
// //     {
// //         nome: "Kelvin",
// //         cargo: "Desenvolvedor FullStack",
// //         contato: "(85)98453-6385",
// //     },
// //     {
// //         nome: "Rodrigues",
// //         cargo: "Desenvolvedor FullStack",
// //         contato: "(85)98453-6385",
// //     },
// //     {
// //         nome: "Sabrina",
// //         cargo: "Desenvolvedor FullStack",
// //         contato: "(85)98453-6385"
// //     },
// // ]
// // const produtos = [
// //     {
// //         id: 1,
// //         nome: "Mouse",
// //         preco: 80,
// //         desc: "Mouse gamer RGB"
// //     },
// //     {
// //         id: 2,
// //         nome: "Teclado",
// //         preco: 100,
// //         desc: "Teclado gamer RGB"
// //     },
// //     {
// //         id: 3,
// //         nome: "Monitor",
// //         preco: 399,
// //         desc: "Monitor portátil"
// //     },
// //     {
// //         id: 4,
// //         nome: "Headphone",
// //         preco: 25,
// //         desc: "Fone de ouvido básico"
// //     },
// //     {
// //         id: 5,
// //         nome: "Tablet",
// //         preco: 700,
// //         desc: "Cintiq Tablet"
// //     },
// //     {
// //         id: 6,
// //         nome: "Suporte de Headset",
// //         preco: 150,
// //         desc: "Suporte com leds"
// //     },
// // ]
// app.get("/", (req, res) => {
//     res.send("Página inicial")
// })

// app.get("/sobre", (req, res) => {
//     res.send("Página sobre o projeto")
// })
// app.get("/contato", (req, res) => {
//     res.send(`<h1>${dados.nome}</h1>
//         <h4>${dados.cargo}</h4>
//         <p>Contato:${dados.contato} Whatssap</p>`)
// })

// app.get("/produtos", (req, res) => {
//     res.json(produtos)
// })

// app.get("/usuarios/:id", (req, res) => {
//     if (req.query.campo) res.json(usuarios[req.params.id - 1][req.query.campo])
//     else (res.json(usuarios[req.params.id - 1])
//     )
// })

// app.get("/usuarios", (req, res) => {
//     res.json(usuarios)
// })

// app.get("/contato", (req, res) => {
//     res.send(`<h1 style="color: Red">${dados.nome}</h1>
//         <h4>${dados.cargo}</h4>
//         <p>Contato: ${dados.contato} whatsapp</p>`)
// })

// app.get("/curriculo", (req, res) => {
//     res.send(`<!DOCTYPE html>
// <html lang="pt-BR">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Currículo | Dev Full Stack Júnior</title>
// </head>
// <body style="margin: 0; padding: 40px 20px; box-sizing: border-box; background-color: #f1f5f9; color: #334155; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6;">

//     <div style="max-width: 850px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; overflow: hidden;">
        
//         <!-- Top Header -->
//         <header style="background-color: #0f172a; color: #ffffff; padding: 40px; border-bottom: 4px solid #3b82f6;">
//             <h1 style="margin: 0 0 4px 0; font-size: 32px; font-weight: 700; letter-spacing: -0.05em;">Seu Nome Completo</h1>
//             <div style="color: #3b82f6; font-size: 18px; font-weight: 500; margin-bottom: 20px;">Desenvolvedor Full Stack Júnior</div>
//             <div style="display: flex; flex-wrap: wrap; gap: 20px; font-size: 14px; color: #94a3b8;">
//                 <span>📍 São Paulo, SP</span>
//                 <span>✉️ seu.email@exemplo.com</span>
//                 <span>📞 (11) 99999-9999</span>
//                 <span>🔗 ://github.com</span>
//                 <span>💼 ://linkedin.com</span>
//             </div>
//         </header>

//         <!-- Main Body Grid / Layout de Duas Colunas -->
//         <div style="padding: 40px; display: flex; flex-wrap: wrap; gap: 40px;">
            
//             <!-- Coluna Esquerda (Principal) -->
//             <div style="flex: 2; min-width: 300px;">
                
//                 <!-- Sobre Mim -->
//                 <section style="margin-bottom: 35px;">
//                     <h2 style="margin: 0 0 15px 0; font-size: 18px; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Sobre Mim</h2>
//                     <p style="margin: 0; color: #64748b; font-size: 15px;">Desenvolvedor Full Stack em início de carreira, fascinado por resolver problemas através de código limpo e escalável. Experiência prática construindo aplicações web modernas utilizando o ecossistema JavaScript (Node.js, Express e bancos de dados). Focado em evolução contínua, boas práticas de arquitetura e metodologias ágeis.</p>
//                 </section>

//                 <!-- Projetos -->
//                 <section style="margin-bottom: 35px;">
//                     <h2 style="margin: 0 0 15px 0; font-size: 18px; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Projetos em Destaque</h2>
                    
//                     <div style="margin-bottom: 20px;">
//                         <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
//                             <div>
//                                 <div style="font-size: 16px; font-weight: 600; color: #0f172a;">E-Commerce API & Dashboard</div>
//                                 <div style="font-size: 14px; color: #3b82f6; font-weight: 500;">Projeto Pessoal / Portfólio</div>
//                             </div>
//                             <div style="font-size: 13px; color: #64748b; white-space: nowrap;">2026</div>
//                         </div>
//                         <p style="margin: 5px 0 0 0; font-size: 14px; color: #64748b;">
//                             Desenvolvimento de uma API REST completa para e-commerce com autenticação JWT, controle de estoque e integração de pagamento simulada.
//                         </p>
//                         <ul style="margin: 5px 0 0 0; padding-left: 20px; font-size: 14px; color: #64748b;">
//                             <li>Tecnologias: Node.js, Express, MongoDB, React, Tailwind CSS.</li>
//                         </ul>
//                     </div>

//                     <div>
//                         <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
//                             <div>
//                                 <div style="font-size: 16px; font-weight: 600; color: #0f172a;">Gerenciador de Tarefas Coletivas</div>
//                                 <div style="font-size: 14px; color: #3b82f6; font-weight: 500;">Hackathon / Projeto Acadêmico</div>
//                             </div>
//                             <div style="font-size: 13px; color: #64748b; white-space: nowrap;">2025</div>
//                         </div>
//                         <p style="margin: 5px 0 0 0; font-size: 14px; color: #64748b;">
//                             Aplicação web no estilo Kanban criada para ajudar equipes a organizarem entregas em tempo real.
//                         </p>
//                         <ul style="margin: 5px 0 0 0; padding-left: 20px; font-size: 14px; color: #64748b;">
//                             <li>Tecnologias: TypeScript, Node.js, PostgreSQL, Socket.io.</li>
//                         </ul>
//                     </div>
//                 </section>

//                 <!-- Experiência -->
//                 <section style="margin-bottom: 35px;">
//                     <h2 style="margin: 0 0 15px 0; font-size: 18px; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Experiência Profissional</h2>
//                     <div>
//                         <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
//                             <div>
//                                 <div style="font-size: 16px; font-weight: 600; color: #0f172a;">Desenvolvedor Full Stack Estagiário</div>
//                                 <div style="font-size: 14px; color: #3b82f6; font-weight: 500;">Tech Solutions Ltda</div>
//                             </div>
//                             <div style="font-size: 13px; color: #64748b; white-space: nowrap;">Jan 2025 - Presente</div>
//                         </div>
//                         <p style="margin: 5px 0 0 0; font-size: 14px; color: #64748b;">Atuação na manutenção e criação de novas funcionalidades para o ecossistema da empresa. Refatoração de componentes legados e otimização de rotas e estruturas no Node.js.</p>
//                     </div>
//                 </section>
//             </div>

//             <!-- Coluna Direita (Lateral / Competências) -->
//             <div style="flex: 1; min-width: 240px;">
                
//                 <!-- Competências -->
//                 <section style="margin-bottom: 35px;">
//                     <h2 style="margin: 0 0 15px 0; font-size: 18px; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Hard Skills</h2>
                    
//                     <div style="font-size: 14px; font-weight: 600; margin: 15px 0 8px 0; color: #334155;">Backend</div>
//                     <div style="display: flex; flex-wrap: wrap; gap: 8px;">
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">Node.js</span>
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">Express</span>
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">TypeScript</span>
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">REST APIs</span>
//                     </div>

//                     <div style="font-size: 14px; font-weight: 600; margin: 15px 0 8px 0; color: #334155;">Frontend</div>
//                     <div style="display: flex; flex-wrap: wrap; gap: 8px;">
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">React.js</span>
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">JavaScript</span>
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">HTML5 / CSS3</span>
//                     </div>

//                     <div style="font-size: 14px; font-weight: 600; margin: 15px 0 8px 0; color: #334155;">Banco & Ferramentas</div>
//                     <div style="display: flex; flex-wrap: wrap; gap: 8px;">
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">PostgreSQL</span>
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">MongoDB</span>
//                         <span style="background-color: #f8fafc; color: #334155; padding: 6px 12px; border-radius: 6px; font-size: 13px; font-weight: 500; border: 1px solid #e2e8f0;">Git / GitHub</span>
//                     </div>
//                 </section>

//                 <!-- Formação -->
//                 <section style="margin-bottom: 35px;">
//                     <h2 style="margin: 0 0 15px 0; font-size: 18px; text-transform: uppercase; letter-spacing: 0.05em; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 6px;">Formação</h2>
//                     <div>
//                         <div style="font-size: 14px; font-weight: 600; color: #0f172a;">Análise e Des. de Sistemas</div>
// `)
// })

// app.listen(3000, () => {
//     console.log("Servidor iniciado em http://localhost:3000");

// })