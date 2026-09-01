import { useState } from "react"

const AddNewProduct = () => {

    const [activepart,setActivePart] = useState(1);
    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("data submited")
    }

    return ( <>
     <div className="border p-4 shadow">
        
        <form onSubmit={handleSubmit}>
           { activepart == 1 && <div >
            <h5 className="text-muted my-2">Product Primary details :</h5>
                    <input className="form-control my-2" type="text" placeholder="product title"/>
                <textarea  className="form-control my-2" placeholder="short description"></textarea>
                <input  className="form-control my-2" type="number" placeholder="product price"/>
                <label>select brand :</label>
                <select className="form-select my-2">
                    <option value="">apple</option>
                    <option value="">apple</option>
                    <option value="">apple</option>
                    <option value="">apple</option>
                </select>
                <label>select category :</label>
                <select className="form-select my-2">
                    <option value="">apple</option>
                    <option value="">apple</option>
                    <option value="">apple</option>
                    <option value="">apple</option>
                </select>
                <button type="button" onClick={()=>setActivePart(2)} className="btn btn-primary">save & next</button>
                </div>
                }
               {activepart ==2 && <div>
                    <h5 className="text-muted my-2">Product features:</h5>
                    <button type="button" onClick={()=>setActivePart(1)} className="btn btn-primary">back</button>
                    <button type="button" onClick={()=>setActivePart(3)} className="btn btn-primary">save & next</button>
                </div>}
        </form>
     </div>
    </> );
}
 
export default AddNewProduct;