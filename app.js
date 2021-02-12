const animation=document.getElementById('animation')
const num=50
const colors=["#0000ff","#00ffff","#008000","#7cfc00","#ffff00","#ffa500","#ff0000","#ffc0cb","#800080"]
const papers=[]

const CretePepaer=()=>{
    const fragment = document.createDocumentFragment()
    for(let i=0;i<40;i++){
        const x=Math.floor(Math.random()*animation.clientWidth)
        const y=Math.floor(Math.random()*animation.clientHeight)
        const xr=Math.random()*2
        const yr=Math.random()*2
        const zr=Math.random()*2
        const rorate=Math.floor(Math.random()*360)
       
        const item=document.createElement('div')
        const index=Math.floor(Math.random()*colors.length)
        item.style.position="absolute"
        item.style.width="10px"
        item.style.height="20px"
        item.style.backgroundColor=colors[index]
        item.style.top=`${y}px`
        item.style.left=`${x}px`
        item.style.transform=`rotate3d(${xr},${yr},${zr},${rorate}deg)`
        fragment.appendChild(item)

        const paper={
            x,y,xr,yr,zr,rorate,item,
            update:function(){
                this.y+=Random(1,10)
                this.x+=Random(-5,5)
                if(this.y>animation.clientHeight||this.x>animation.clientWidth){
                    this.x=Math.floor(Math.random()*animation.clientWidth)
                    this.y=0
                }
                this.item.style.top=`${this.y}px`
                this.item.style.left=`${this.x}px`
                this.rorate=(this.rorate+5)%360
                this.item.style.transform=`rotate3d(${this.xr},${this.yr},${this.zr},${this.rorate}deg)`
            }
        }

        papers.push(paper)
    }
    animation.appendChild(fragment)
    Move()
}

const Random=(min,max)=>{
    return Math.floor( Math.random() * (max + 1 - min) ) + min 
}

const Move=()=>{
    for(let i=0; i<papers.length; i++){
        papers[i].update()
    }
    requestAnimationFrame(Move)
}

CretePepaer()