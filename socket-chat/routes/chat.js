const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    await ctx.render('chat', {
        title: 'dialog'
    });
});

module.exports = router