
export default function parseNode(node){
    let nodeList = null;
    if(node.children){
        nodeList = node.children;
    }else{
        return {} ;
    }
    
    let obj = {id:node.attributes.id.nodeValue,name:node.attributes.name.nodeValue}
    if(nodeList.length>0){
        obj.children = [];
        obj.leaf = false;
        for(let i = 0;i < nodeList.length;i++){
            let childNode = nodeList[i];
            if(childNode.nodeType == 1){  
                obj.children.push(parseNode(childNode));
            }
        } 
    }else{
        obj.leaf = true;
    }
    return obj;
}


export function parseObj(obj,target,res){
    if(!obj.leaf){
      for(let i = 0;i<obj.children.length;i++){
        parseObj(obj.children[i],target,res);
      }
    }else{
        if(target.indexOf(obj.id)>-1){
            res.push(obj);
        }
    }     
  }
