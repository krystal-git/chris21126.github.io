const canvas = document.querySelector(".home-wallpaper") as HTMLCanvasElement
const ctx = canvas.getContext('2d')

var winWidth = window.innerWidth
var winHeight = window.innerHeight

canvas.width = winWidth;
canvas.height = winHeight;

console.log(performance.now());
class WallpaperText {
    x_pos: number
    y_pos: number
    start_time: number
    current_time: number
    ttl: number
    dx: number
    is_alive: boolean
    font_color: number
    opacity: number
    dc: number

    constructor(private fontSize: number, private fontFamily: string, private textMessage: string) {
        this.fontSize = fontSize
        this.fontFamily = fontFamily
        this.textMessage = textMessage
        this.x_pos = (Math.random() * winWidth)
        this.y_pos = (Math.random() * winHeight)
        this.start_time = performance.now()
        this.ttl = (Math.random() * 10) * 1000
        this.dx = 5 - (Math.random() * 10)
        this.dx = (this.dx / (Math.abs(this.dx))) * 2
        this.is_alive = true
        this.font_color = 255
        this.opacity = 1.0
        this.dc = 255 / (this.ttl/1000 * 60)
   
    }

    update() {
        this.current_time = performance.now()
        if (this.current_time - this.start_time > this.ttl) {
            // this.start_time = performance.now()
            // this.ttl = (Math.random() * 10) * 1000
            // this.dx = -this.dx
            this.is_alive = false
            // this.opacity -= .01
            this.font_color -= this.dc
         
                
        }
        // else this.x_pos++


        this.x_pos += this.dx
    }

    draw() {
        if (ctx && this.is_alive) {
            ctx.font = `${this.fontSize}px ${this.fontFamily}`
            ctx.fillStyle = `rgba(
        ${Math.floor(this.font_color)},
        ${Math.floor(this.font_color)},
        ${Math.floor(this.font_color)},
        1)`;
            ctx.fillText(this.message, this.x_pos, this.y_pos)
        }
    }

    lifeSpan(genereateEvery: number = (Math.random() * 10), TTL: number = (Math.random() * 10)) {
        return [genereateEvery * 1000, TTL * 1000]
    }
}

var text_list: WallpaperText[] = []
text_list.push(new WallpaperText(18, 'monospace', 'NEW TEXT'))
text_list.push(new WallpaperText(18, 'monospace', 'NEW TEXT'))
text_list.push(new WallpaperText(18, 'monospace', 'NEW TEXT'))
text_list.push(new WallpaperText(18, 'monospace', 'NEW TEXT'))
text_list.push(new WallpaperText(18, 'monospace', 'NEW TEXT'))

function test_func() {
    var text: WallpaperText;

    for (text of text_list) {
        text.update()

    }

    ctx?.clearRect(0, 0, winWidth, winHeight)

    for (text of text_list) {
        text.draw()
    }
    window.requestAnimationFrame(test_func)
}

var x = 0
var text = new WallpaperText(24, 'monospace', 'NEW TEXT')
window.onload = () => {
    window.requestAnimationFrame(test_func)
    // var text = new WallpaperText()
    // var t = 3000
    // setInterval(() => {
    //     t--;
    //     console.log(t);
    //     text.draw()

    // }, 1000);
}
