import React,{ useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Edit=()=>{
    // const {id} =useParams();
    // const {bookName,authorName,imageURL,category,bookLink,bookDescription} = useLoaderData();

    const bookCategory=[
        "Fiction",
        "Non-Fiction",
        "Mystry",
        "Programming",
        "Science Fiction",
        "Fantansy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
    ]

    const [selectCategory,setselectCategory]=useState(bookCategory[0]);
    const handleChangeCategory=(e)=>{
        setselectCategory(e.target.value)
    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        const form=e.target;

        const bookName=form.bookName.value;
        const authorName=form.authorName.value;
        const imageURL=form.imageURL.value;
        const category=form.category.value;
        const bookDescription=form.bookDescription.value;
        const bookLink=form.bookLink.value;

        const updatebookObj={
            bookName,authorName,imageURL,category,bookDescription,bookLink
        }

        // console.log(bookObj)
        fetch("",
            {
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(updatebookObj)
            }
        ).then(res => res.json()).then(data => {
            // alert("Book Uploaded Successfully!!!")
            Swal.fire("Book Updated Successfully!!!")
        })
    }

    return(
        <div className="  flex w-full space-x-0 px-6 ">
        <div className="flex flex-col w-full ">
            <div className="flex  text-3xl font-bold ml-6 mt-6">
            <h2 >Edit the Book !</h2>
            </div>
            <form onSubmit={handleUpdate} className="mt-6 ml-6">
            <div className="flex md:w-full mt-6 gap-5 flex-col md:flex-row w-full ">
                <div className=" flex flex-col md:w-1/2 ">
                <label className="text-xl font-medium mb-2" htmlFor="bookName" >Book Title</label>
                <input className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl" 
                placeholder="Book Name" 
                type="text" 
                id="bookName" 
                name="bookName" 
                // defaultValue={bookName}
                required></input>
                </div>
                <div className=" flex flex-col md:w-1/2 ">
                <label className="text-xl font-medium mb-2" htmlFor="authorName">Author Name</label>
                <input className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl" 
                placeholder="Author Name" 
                type="text" 
                id="authorName" 
                name="authorName"
                // defaultValue={authorName}
                required></input>
                </div>
            </div>
            <div className="flex md:w-full md:gap-5 mt-7 flex-col md:flex-row w-full  ">
                <div className=" flex flex-col md:w-1/2  ">
                <label className="text-xl font-medium mb-2" htmlFor="bookImage" >Book Image URL</label>
                <input className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl" 
                placeholder="Image URL" 
                type="text" 
                id="imageURL" 
                name="imageURL" 
                required 
                // defaultValue={imageURL}
                >

                </input>
                </div>
                <div className=" flex flex-col md:w-1/2 ">
                <label className="text-xl font-medium mb-2" htmlFor="bookCategory" >Book Category</label>
                <select className="w-full rounded-xl px-2 py-1.5 border-2 border-gray-700" id="bookCategory" name="category" value={selectCategory} onChange={handleChangeCategory}>
                    {
                        bookCategory.map((option)=> <option key={option} value={option}>{option}</option>)
                    }
                </select>
               
                </div>
            </div>
            <div className="flex md:w-full flex-col md:flex-row mt-7 w-[450px] ">
                <div className=" flex flex-col w-full ">
                <label className="text-xl font-medium mb-2" htmlFor="bookDescription">Book Description</label>
                <textarea className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl" 
                placeholder="Book Description" 
                id="bookDescription" 
                name="bookDescription" 
                required 
                rows="6" 
                // defaultValue={bookDescription}
                ></textarea>
                </div>  
            </div>
            <div className="flex md:w-full mt-7 flex-col md:flex-row  w-[450px] ">
                <div className=" flex flex-col md:w-full">
                <label className="text-xl font-medium mb-2" htmlFor="bookLink">Book PDF Link</label>
                <input className="w-full  px-2 py-1.5 border-2 border-gray-700 rounded-xl" 
                placeholder="Paste Book PDF URL here" type="text" id="bookLink" 
                name="bookLink" 
                required 
                // defaultValue={bookLink}
                ></input>
                </div>
                
            </div>
            <div className="flex md:w-full mt-7 w-[450px] mb-5">
                <div className=" flex md:w-full w-[900px]">
                    <button className="bg-gray-900 text-white rounded-lg w-full py-3 hover:opacity-90">Edit Book</button>
                
            </div>
        </div>
        </form>
        </div>
            
        </div>
    )

}
export default Edit