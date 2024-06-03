// 'use client';

import Button from "@/app/components/Button";
import Image from "next/image";
import thumb from "@/public/images/thumb.jpg";

export default function Mission() {
  return (
    <main>
      <div>Mission page  </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo animi molestias optio veniam pariatur distinctio eius dolor cupiditate accusamus, quis nihil nisi, laboriosam quo aliquid nam aspernatur. Similique facilis consequuntur molestiae. Iste architecto ea molestiae! Beatae, maxime obcaecati id asperiores voluptate ab ullam veniam deleniti iure necessitatibus quam dolor?</p>

      {/* image */}

      <div className="w-[400px]">
        <Image placeholder="blur" src={thumb} alt="image" quality={100}></Image>
      </div>


      {/* button */}
      <Button></Button>
    </main>
  )
}
