import { Box, Button, DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, Heading, HStack, IconButton, Image, Input, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useColorModeValue } from './ui/color-mode'
import { useProductStore } from '../../store/product'
import { toaster } from './ui/toaster'


const ProductCard = ({product}) => {

    const textColor = useColorModeValue('gray600', 'gray200')
    const bg = useColorModeValue('white', ' gray.800')

    const [updatedProduct, setUpdatedProduct] = useState(product)

    const {deleteProduct, updateProduct} = useProductStore()
    const handleDeleteProduct = async (pid) =>{
        const {success, message} = await deleteProduct(pid)
        if(!success){
            toaster.create({
                title: 'Error',
                description: message,
                type: 'error',
                duration: 3000,
                action:{
                    label: "X"
                }
                
            })
        } else {
            toaster.create({
                title: 'Success',
                description: message,
                type: 'success',
                duration: 3000,
                action:{
                    label: "X"
                }
                
            })
        }
    }
    const handleUpdateProduct = async (pid, updatedProduct) =>{
        const {success, message} = await updateProduct(pid, updatedProduct)
        if(!success){
            toaster.create({
                title: 'Error',
                description: message,
                type: 'error',
                duration: 3000,
                action:{
                    label: "X"
                }
                
            })
        } else {
            toaster.create({
                title: 'Success',
                description: "Product updated successfully",
                type: 'success',
                duration: 3000,
                action:{
                    label: "X"
                }
                
            })
        }
    }

  return (
    <Box
    shadow={'lg'}
    rounded={'lg'}
    overflow={'hidden'}
    transition={'all 0.3s'}
    _hover={{transform: "translateY(-5px)", shadow: 'xl'}}
    bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w={'full'} objectFit={'cover'}/>
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
                ${product.price}
            </Text>

            <HStack spacing={2}>

                <DialogRoot>
                    <DialogTrigger>
                        
                <IconButton colorPalette={'blue'}>
                    <FaEdit />
                </IconButton>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        </DialogHeader>
                        <VStack spacing={4}>
                        <Input
                        placeholder='Product Name'
                        name='name'
                        value={updatedProduct.name}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                        >
                        </Input>
                        <Input
                        placeholder='Price'
                        name='price'
                        type='number'
                        value={updatedProduct.price}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                        >
                        </Input>
                        <Input
                        placeholder='Image URL'
                        name='image'
                        value={updatedProduct.image}
                        onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                        >
                        </Input>
                    </VStack>
                        <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogActionTrigger>
                        <DialogActionTrigger>
                        <Button colorPalette={'blue'} mr={3}
                        onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Save</Button>
                        </DialogActionTrigger>
                        </DialogFooter>
                        <DialogCloseTrigger />
                    </DialogContent>
                </DialogRoot>

                <IconButton colorPalette={'red'} onClick={() => handleDeleteProduct(product._id)}><MdDelete /></IconButton>
            </HStack>

        </Box>

    </Box>
  )
}

export default ProductCard