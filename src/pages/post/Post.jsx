import React from 'react';
import DoPost from '../../component/doPost/DoPost';

const Post = () => {
    return (
        <div className='min-h-[80vh] mx-auto w-full md:w-11/12 my-4 md:my-8 lg:my-12 '>
            <h2 className=" my-4 lg:my-12 text-center text-2xl lg:text-3xl xl:text-5xl">পোস্ট করুন</h2>
            <DoPost></DoPost>
        </div>
    );
};

export default Post;