import React, { useState } from 'react'

const Fitness = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[website,setWebsite]=useState("");
    const[comment,setComment]=useState("");
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        alert(`Name is: ${name}`+"\n"+ `Email is: ${email} `+"\n"+ `Website is: ${website}`+"\n"+`Comment is: ${comment}`)
    }
  return (
    <div>
        <div className='div4'>
        <h1 className='hd6'>1. The Best Protein Pancake Recipe
EVER: Bacon & Date Protein Pancakes</h1><br></br>
<h3 className='hd7'>Don't settle for boring. <br></br>This recipe will change how you look at protein pancakes. 
    And: There's bacon. (You know you want bacon.)</h3><br></br>
    <hr></hr><br></br>
    <div>
    <h2 className='hd8'>Ingredients:</h2>
    <img className='iml' src='https://blogscdn.thehut.net/app/uploads/sites/478/2019/02/Protein-Pancakes-FEATURE-10_1577795147.jpg'></img>
    <ul className='ulll'>
        <li className='liii'>1 cup gluten-free rolled oats</li>
        <li className='liii'>1 tbsp. chia seeds</li>
        <li className='liii'>1 tsp. baking powder</li>
        <li className='liii'>1 tsp. Stevia or raw unfiltered honey</li>
        <li className='liii'>½ scoop protein powder**</li>
        <li className='liii'>¼ tsp. cinnamon</li>
        <li className='liii'>½ tsp. vanilla extract</li>
        <li className='liii'>1 cup egg whites</li>
        <li className='liii'>2 whole eggs, pasture-raised</li>
        <li className='liii'>¼ cup unsweetened non-dairy milk</li>
        <li className='liii'>2 tbsp. maple syrup, grade B</li>
        <li className='liii'>4 slices turkey bacon, uncured & nitrate-free </li>
        <li className='liii'>5 pitted dates, chopped  </li>
        <li className='liii'>1 tbsp. grass-fed butter</li>
    </ul>
    <br></br>
    <hr></hr>
    <br></br>
    <h1 className='hd6'>2. Peaches and Greens Smoothie</h1><br></br>
    <h2 className='hd8'>What You Need</h2>
    <img className='iml' src='https://www.flushinghospital.org/newsletter/wp-content/uploads/2021/07/GettyImages-1200767905.jpg'></img>
    <ul className='ulll'>
        <li className='liii'>1 small handful spinach</li>
        <li className='liii'>1/2 cup plain Greek yogurt</li>
        <li className='liii'>1 c. Unsweetened vanilla almond milk</li>
        <li className='liii'>Frozen peach slices (1 peach)</li>
        <li className='liii'>1 scoop unflavored protein powder</li>
        <li className='liii'>1 tsp Chia seeds</li>
        <li className='liii'>1/2 tsp vanilla extract</li>
    </ul>
    </div>

        </div>
        <div className='div32'>
<h1 className='hd9'>Leave a Comment</h1>

<form className='formm'  onSubmit={onHandleSubmit}>
    <label className='lb1' required >NAME*</label><br></br>
    <input type="text" className='in1' placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
    <br></br>
    <label className='lb1' required>EMAIL*</label><br></br>
    <input type="email" className='in1' placeholder='abc@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
    <br></br>
    <label className='lb1' required>WEBSITE*</label><br></br>
    <input type="text" className='in1' placeholder='enter your website' value={website} onChange={(e)=>setWebsite(e.target.value)}></input>
    <label className='lb1'>COMMENT*</label>
    <br></br><br></br>
    <textarea className='txta' rows="5" cols="48" value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
    <button className='btn' type='submit'>Submit</button>
</form>
</div>
    </div>
  )
}

export default Fitness