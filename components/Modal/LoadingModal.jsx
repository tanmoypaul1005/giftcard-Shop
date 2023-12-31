import { Box, Modal } from '@mui/material';
import React from 'react'
import { Circles, RotatingLines } from 'react-loader-spinner';
import useUtilityStore from '../../app/stores/UtilityStore';


export default function LoadingModal() {

    const { isLoading, } = useUtilityStore(state => state)

    return (
        <>
            <Modal
                open={isLoading}
                onClose={() => { }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute  w-[100px] h-[100px] max-w-3xl px-5 py-5 my-5 text-left align-middle transition-all transform  outline-none  rounded-lg flex flex-col justify-center items-center'>

                    <RotatingLines
                        width="100"
                        strokeColor="#FB607F"
                        strokeWidth={4}
                        strokeWidthSecondary={3}
                    />


                </Box>
            </Modal>
        </>
    )
}
