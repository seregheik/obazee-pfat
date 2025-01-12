import Image from "next/image";
import Form from "next/form";

export default function LogIn() {
  return (
   <section className={"h-screen grid sm:grid-cols-1 lg:grid-cols-2 text-white"}>
       <div className={"bg-primary lg:flex hidden justify-center items-center"}>
           <div className={"flex flex-wrap justify-center max-w-lg px-10"}>
               <Image src={"/pfatlogoLarge.png"} alt={"PFAT Laundry logo"} height={150} width={300} />
               <h2 className={"w-full text-start text-4xl font-bold py-4"}>Welcome to Pfat Laundry</h2>
               <p className={"w-full text-start"}>
                   Pfat Laundry Shop is an innovative company that combines quality
                   service with prompt delivery, through simplicity and effectiveness,
                   Pfat offers an array of services from traditional laundering to more
                   specialized needs like wash and fold, ironing, home delivery and eco
                   friendly options. We ensure that your clothes gets the care it deserves by
                   making sure they look and feel brand new
               </p>
           </div>
       </div>
       <div className={"flex justify-center items-center px-5 text-black"}>
           <div className={"flex flex-wrap justify-center max-w-lg"}>
               <div className={"w-full"}>
                   <h4 className={"text-4xl text-start pb-3 font-bold"}>Log In</h4>
                   <p className={"text-accent text-1xl pb"}>Welcome back, please enter your details</p>
               </div>

               <Form className={"w-full focus-within:border-blue-300"} action={"/"}>
                   <label className={"form-label"} htmlFor={"email"}>Email Address</label>
                   <input
                       className={"form-input"}
                       name={"email"}
                       placeholder={"Enter Email Address"}
                       autoComplete={"email"}
                   />
                   <label className={"form-label"} htmlFor={"password"}>Password</label>
                   <input
                       className={"form-input mb-12"}
                       name={"password"}
                       type={"password"}
                       placeholder={"Enter Password"}
                       autoComplete={"password"}
                   />
                   <button className={"login-button"}>Log In</button>
               </Form>
           </div>
       </div>
   </section>
  );
}
