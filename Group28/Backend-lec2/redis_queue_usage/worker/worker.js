const Redis = require('ioredis')

const redis = new Redis();

async function codeExc() {
    while (1) {
        const response = await redis.rpop('submission')
        if (response != null) {
            setTimeout(() => {
                console.log(response)
            }, 2000)
        }
    }
}
codeExc();