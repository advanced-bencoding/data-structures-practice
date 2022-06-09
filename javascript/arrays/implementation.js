class MyArray{
    constructor(...data){
        this.length = data.length
        this.data = {}
        data.forEach((x, i)=>{
            this.data[i] = x
        })
    }

    display(){
        let result = "[ "
        for(let i = 0; i<this.length; i++){
            result += this.data[i] + " "
        }
        return result + "]"
    }

    get(x){
        if(x>=this.length || x<0){
            return "Array Index Out Of Bounds"
        }
        else{
            return this.data[x]
        }
    }

    push(x){
        this.data[this.length] = x
        this.length++
    }

    pop(){
        delete this.data[this.length-1]
        this.length--
    }
}

let obj1 = new MyArray(2, 4, 5, 7)
obj1.push(10)
obj1.push(11)
obj1.pop()
obj1.pop()
obj1.pop()
obj1.push(10)
console.log(obj1.display())