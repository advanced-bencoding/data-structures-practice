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

    get(index){
        if(index>=this.length || index<0){
            return "Array Index Out Of Bounds"
        }
        else{
            return this.data[index]
        }
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop(){
        if(this.length>0){
            const item = this.data[this.length-1]
            delete this.data[this.length-1]
            this.length--
            return item
        }
    }

    delete(index){
        if(index>0 && index<this.length){
            const item = this.data[index]
            for(let i=index; i<this.length-1; i++){
                this.data[i] = this.data[i+1]
            }
            delete this.data[this.length-1]
            this.length--
            return item
        }
        else{
            return "Array Index Out Of Bounds"
        }
    }
}

let obj1 = new MyArray(1, 5, 6, 7)
obj1.push(10)
obj1.push(11)
obj1.push(10)
obj1.delete(2)
console.log(obj1.display())