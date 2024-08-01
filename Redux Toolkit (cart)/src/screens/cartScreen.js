import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from "twrnc"
import { addToCart, removeFromCart } from '../slices/cartSlice';
const CartScreen = () => {
    const products = useSelector(state=> state.cart)
    const {params} = useRoute()
    // console.log(params);
    // let Total= params
    const {height,width}=Dimensions.get("window")
    const dispatch =useDispatch()

    const price= useSelector(state=> state.cart)
let total=0
let counter=0
   let data= price.map((item)=>{
     counter++
return total+=item.price*item.qty
})
let temp=(data.length)-1
data= data[temp]
data =Math.floor(Math.round(data))
    return (
        <ScrollView>
        <View style={{...tw`relative flex-1  `,height:height}}>
            <Text style={{ color: "black", ...tw`text-3xl m-3` }}>
          Cart Screen
        </Text>
        <View style={{}}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <View style={{ ...tw` mt-5 flex-row p-3` }}>
                <Image
                  source={item.image}
                  style={{ height: 125, width: 125, ...tw`rounded-3xl` }}
                />
                <View style={{ ...tw`justify-center ml-3` }}>
                  <Text style={{ color: "black", ...tw`text-xl ` }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: "black", ...tw`text-lg ` }}>
                    {item.brand}
                  </Text>
                  <View style={{ ...tw`flex-row items-center` }}>
                    <Text
                      style={{
                        color: "black",
                        ...tw`text-xl  text-green-700`,
                      }}
                    >
                      {item.price}
                    </Text>
                    <Text style={{ ...tw`text-black text-sm` }}>Rs</Text>
                  </View>
                  <View
                    style={{
                      ...tw`flex-row items-center  justify-between  w-60`,
                    }}
                  >
                   
                    {item.qty == 0 ? null : (
                      <View style={{ ...tw`flex-row items-center` }}>
                        <TouchableOpacity
                          style={{
                            ...tw` px-4 py-2  bg-green-600 rounded-full `,
                          }}
                          onPress={
                            ()=>{ dispatch(removeFromCart({id:item.id}))}
                          }
                        >
                          <Text style={{ ...tw`text-lg text-center ` }}>-</Text>
                        </TouchableOpacity>
                        <Text style={{ ...tw`text-black px-2` }}>
                          {item.qty}
                        </Text>
                        <TouchableOpacity
                          style={{
                            ...tw` px-4 py-2  bg-green-600 rounded-full `,
                          }}
                          onPress={
                            ()=> dispatch(addToCart(item))
                          }
                        >
                          <Text style={{ ...tw`text-lg text-center` }}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View
          style={{
            ...tw`  rounded-2xl   mx-2 mt-2  absolute bottom-10  `,
            backgroundColor: "green",
          }}
        >
          <View
            style={{ ...tw`flex-row w-90 justify-between  w-full px-5 py-3  ` }}
          >
            <Text style={{ ...tw`text-white    ` }}>Products Amount</Text>
            <Text style={{ ...tw`text-white  ` }}>{data} Rs</Text>
          </View>
          <View
            style={{ ...tw`flex-row w-90 justify-between  w-full px-5 py-3` }}
          >
            <Text style={{ ...tw`text-white    ` }}>Delivery Fee</Text>
            <Text style={{ ...tw`text-white  ` }}>300 Rs</Text>
          </View>
          <View
            style={{ ...tw`flex-row w-90  justify-between  w-full px-5 py-3` }}
          > 
            <Text style={{ ...tw`text-white    ` }}>Total</Text>
            <Text style={{ ...tw`text-white  ` }}>
              { (data+300) } Rs</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OrderLoading");
            }}
          >
            <View
              style={{
                ...tw` rounded-full flex-row justify-center   rounded-full p-4  items-center mx-3 my-2 `,
                backgroundColor: "green",
              }}
            >
              <Text style={{ ...tw`text-white font-extrabold text-xl` }}>
                Place Order
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default CartScreen;
