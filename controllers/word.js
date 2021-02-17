const Word=require('../model/word')

exports.addWord=(req,res)=>{
    var word=req.params['word']
    Word.findOne({'word':word}).then((doc)=>{
    if(doc){
        console.log("Word found in the system: "+ word);
        Word.updateOne(
                     {'word':word}, // filter query
                    {$inc: {frequency: 1}}, // if word found increment count by 1
                    function(err, result) {

                        if (err){
                            console.log("Could not update word: "+ word + " error:" + err);
                            return res.status(500).json("Could not update frequency for word: "+ word);
                        }

                        console.log("Frequency updated for word: " + word);
                        //console.log(result);  
                        return res.status(200).json("Word already in the system. updated frequency")
                              
                    }
                )
                
    }
    else{
        // if doc not found then insert document for the new word with count with default(1)
        const w = new Word()
            w.word = word
            w.save(w, function(err, result) {
                if (err){
                    console.log("Could not save document for word: "+ word + " error:" + err);
                }
                else{
                     console.log("Save new word: " + word);
                     console.log(result); 
                    
                    return res.status(200).json(w)
                }
            });
    }

    })
}


exports.getWordFrequency=(req,res)=>{
    var word=req.params['word']
    Word.findOne({'word':word}).then((doc)=>{
        if(doc){
            console.log(doc.word+" frequency is "+ doc.frequency)
            return res.status(200).json(doc.frequency)
        }
        else{
            console.log(word+ " not found")
            return res.status(400).json({message:word+" not found"})
        }
        })

}



