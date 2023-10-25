import React from 'react';

const DocumentDriverInfo = ({ info }) => {
    return (
        <div className='pb-10'>
            <h1 className='font-semibold text-xl mb-4 mt-6'>Documents</h1>
            {info.documents ?
                <>
                    {
                        info.documents.map((doc, ind) => (
                            <div key={ind} className='w-full flex items-center relative   gap-3 px-4 py-3  rounded-lg border'>
                                <div className='w-full flex gap-3'>
                                    <img src={doc.docFile} alt="doc" />
                                    <p className='font-medium w-full'>{doc.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </>
                :
                <p className='text-center'> No documents found!</p>}
        </div>
    )
}


export default DocumentDriverInfo;