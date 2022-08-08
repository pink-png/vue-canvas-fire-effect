export class Fire {
    private space
    private div
    private surface
    private particles: Array<particle> = []
    readonly particle_count = 150  // 只读属性
    readonly canvasWidth = 320
    readonly canvasHeight = 480
    private time = 0
    constructor(el: HTMLCanvasElement, div: HTMLElement) {
        this.space = el
        this.div = div
        this.surface = this.space.getContext("2d")
    }

    init(el: HTMLCanvasElement) {
        this.surface?.scale(1, 1)
        for (let i = 0; i < this.particle_count; i++) {
            this.particles.push(new particle(el));
        }
        this.setstyle(this.space, this.canvasWidth, this.canvasHeight)
        this.setstyle(this.div, this.canvasWidth, this.canvasHeight)
    }

    setstyle(el: HTMLElement, width: number, height: number) {
        el.style.width = width.toString()
        el.style.height = height.toString()
    }
}

export class particle {
    private speed
    private canvasWidth
    private canvasHeight
    private location
    private radius
    private life
    private death
    private r
    private g
    private b
    constructor(el: HTMLCanvasElement) {
        this.canvasWidth = el.style.width
        this.canvasHeight = el.style.height
        this.location = { x: (Number(this.canvasWidth) / 2), y: (Number(this.canvasHeight) / 2) + 35 }
        this.speed = { x: -1 + Math.random() * 2, y: -5 + Math.random() * 5 }
        this.radius = .5 + Math.random() * 1
        this.life = 10 + Math.random() * 10
        this.death = this.life
        this.r = 255
        this.g = Math.round(Math.random() * 155)
        this.b = 0
    }
}
