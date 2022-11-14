// importando a biblioteca do 'Telegraph'
const { Telegraf } = require('telegraf')

// criando o objeto 'bot' e instanciando como um novo objeto da classe 'Telegraf'
const bot = new Telegraf(env.token)

// iniciando o bot
bot.start(ctx => {
  const from = ctx.update.message.from
  if (from.id != '1373064778' || '1351450134') {
    ctx.reply(
      `Desculpe-me ${from.first_name} ${from.last_name}. No momento só estou conversando com algumas pessoas selecionadas!!`
    )
  } else {
    (`Seja bem vindo ${from.first_name}! 
      Eu sou um 'Motivador' em treinamento!
      Tenho como objetivo fazer você pensar um pouco.
      Por enquanto eu:
 
        ◦ Eu respondo a Texto
        ◦ Eu respondo a Localização 
        ◦ Eu respondo a Contato
        ◦ Eu respondo a Voz
        ◦ Eu respondo a Foto
        ◦ Eu respondo a Emogi
        ◦ Se falar = conversar
          Iniciaremos uma conversa
        ◦ Se mostrar esses emogis = 
          🥤 🍺 ☕
        ◦ Após o conversar as palvras em negrito podem ser utilizadas
        ◦ /burguer/i Pode se tambem utiizar essa expressão regular
        ◦ localização o retorno de sua localização
        
    `)
  }
})

// Tradando evento de texto iniciando a conversa 
bot.on('text', ctx => {
    const texto = ctx.update.message.text
    ctx.reply(`Nem todo mundo sempre estará disposto a escutar o que você fala: '${texto}',
        mas saiba que suas palavras são muito importante para mim! Gostaria de conversar um pouco? Digite: conversar.
    `)
})

// tratando eventos de localização	
bot.on('location', ctx => {
    const loc = ctx.update.message.location
    ctx.reply(`A localidade em que você se encontra sendo ela: 
            latitude: ${loc.latitude}
            longetude: ${loc.longitude}
            é o local inicial para conquistar seu sonho!
        `)
})

//tratando eventos de contatos
bot.on('contact', ctx => {
    const cont = ctx.update.message.contact
    reply(`O que voce acha de tentar melhorar o dia de ${cont.first_name} também?`)
})

// tratando eventos de audio
bot.on('voice', ctx => {
    const voz = ctx.update.message.voice
    console.log(voz)
    ctx.reply(`O audio tem ${voz.duration} segundos,
     mas percebe-se que cada vez mais somos presos a pequenos segundos mas sempre aproveite ao maximo fazer aquilo que gosta`)
})

bot.hears('conversar', ctx => {
  ctx.replyWithHTML(`
    Sobre o que gostaria de conversar?
    Receber uma frase <b> motivacional </b>
    Motivo de tantas duvidas <b> duvidas </b>
    Como vai o seu <b> dia </b>?
    Pequenas <b> coisas </b>
    <b> Persistencia </b>    
    `)
})

bot.hears('dia', ctx => {
  ctx.reply(`Sempre teremos um novo dia onde 
  desde o inicio temos a capacidade de ditar o rumo dos 
  acontecimentos pois tudo que lhe acontece só depende de sí mesmo se almeja 
  algo grande, tendo um enorme objetivo, saiba que tudo se é construido aos poucos então se persistir um dia estará onde quer chegar
    `)
})

bot.hears('duvidas', ctx => {
  ctx.reply(`O ser humano sempre é acarretado de duvidas 
  mas é isso que torna-o capacitado para resolve-la, quanto mais perguntas 
  tivermos maior será nosso aprendizado e com isso nossa alegria, satisfação e conquista
    `)
})

bot.hears('motivacional', ctx => {
  ctx.reply(`Momentos bons e ruins sempre viram a acontecer basta lembrar 
  que assim como temos epócas difíceis sempre virá a seu momento bom assim como 
  a seguinte frase após toda noite fria e escura sempre virá o amanhacer para trazer 
  o calor e a esperaça, tenha esperaça no amanhacer
    `)
})

bot.hears('Persistencia', ctx => {
  ctx.reply(`Saiba que sua persistencia sempre sera recompensada, muitas vezes o esforço que 
  dedica diariamente pode acabar não mostrando resultado mas tenha consistencia naquilo que 
  faz que não demorará muito para alcançar o que almeja
    `)
})

bot.hears('coisas', ctx => {
  ctx.reply(`Muitas vezes as pequenas coisas que fazemos no nosso dia a dia tendem a ditar o ritmo
   tanto da sua semana como do seu propio mês, por isso não se desvie de seu objetivo
    `)
})

// tratando eventos de de imagem/foto
bot.on(`photo`,
    ctx.replyWithPhoto({
    source: `${__dirname}/viagem.jpg`,
    caption: 'Adorei sua imagem mas gostaria de te mostrar isso também, o que acha de tentar algo diferente? ou ir para um local diferente?' 
  
}))

// tratando eventos de tickers
bot.on(`sticker`, ctx =>{
    const stic = ctx.update.message.sticker
    ctx.reply(`Você enciou o ${stic.emoji}
    O que acha de selecionar alguns dos icones que mostrei lá no inicio?
    `)
})

bot.hears('🥤 Coca', async ctx => {
  await ctx.reply(`Refrigerante pode estar relacionado ao prazer momentaneo, mas ainda sim é algo que sempre deve-se aproveitar viva sua propria caminhada!`)
  await ctx.reply(
    'Mais algum tipo de bebida?',
    Markup.keyboard(['☕ Café da manhã', '🍺 Cerveja' , '🏅 Sair']).resize().oneTime()
  )
})

bot.hears('☕ Café da manhã', async ctx => {
  await ctx.reply(`Saiba que o café da manha é a refeição mais importante do dia aproveite cada momento de sua caminhada!`)
  await ctx.reply(
    'Mais algum tipo de bebida?',
    Markup.keyboard(['🥤 Coca', '🍺 Cerveja', '🏅 Sair']).resize().oneTime()
  )
})

bot.hears('🍺 Cerveja', async ctx => {
  await ctx.reply(`Pode ser relacionada ao esquecimento para não lembra de um dia ruim, por mais que tenha problemas em sua caminhada não desita, seja sempre melhor!`)
  await ctx.reply(
    'Mais algum tipo de bebida?',
    Markup.keyboard(['☕ Café da manhã', '🥤 Coca' ,'🏅 Sair']).resize().oneTime()
  )
})

bot.hears('🏅 Sair', async ctx => {
  ctx.reply(`Saiba que sempre será um vencedor bastando acreditar em si mesmo valorize as suas pequenas conquistas`)
})

bot.hears(/burguer/i, ctx => {
  ctx.reply('Hamburguer... X-Burguer... X-Salada, Tudo isso são comidas que sempre acabam em algum momento passar por nossa caeça e caso ache necessaria saiba que tudo bem aproveitar pois cada momento em que se vive com aquilo que lhe tras felicidade saiba que esse momento vale a pena!')
})

bot.hears('localização', ctx => {
  ctx.replyWithLocation(latitude, longitude)
})

// iniciando o 'polling' com o servidor para verificar se há novas mensagens na conversa
bot.startPolling()