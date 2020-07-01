import { fork} from 'child_process'
import path from 'path'

fork(path.resolve(__dirname,'./dlworker.js'),[aaa],(error,stdout,stderr)=>{
    
})