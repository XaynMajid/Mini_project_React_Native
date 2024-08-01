import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
// import { products } from "../constants";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { useNavigation } from "@react-navigation/native";
import { products } from "../constants";

const HomeScreen = () => {
  const navigation =useNavigation()
  // const products = useSelector(state => state.product.items);
  // console.log(products,"hi");
  // const state = useSelector(state=> state)
  // console.log(state);
  const products = useSelector(state => state.product); /// it takes tooo much time to render, the reason was i don't know how it was storing the data in the store so i uses some techniques like:  const state = useSelector(state => state); && console.log(state) then const products = state.product.items; &&  console.log(products, "hi")
  // console.log(product);
  const dispatch = useDispatch()

const cartData= useSelector(state=>state.cart)
let total=0
const totalVal=()=>{
  cartData.map(item=>{
    total+=item.price
  })
  return total.toFixed(2)
}

let data = totalVal()

  return (
    <ScrollView>
      <View style={{...tw`relative`}}>
        <Text style={{ color: "black", ...tw`text-3xl m-3` }}>
          Redux ToolKit
        </Text>
        <View style={{}}>
          <FlatList
            data={products}
            keyExtractor={(item)=>item.id}
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
                    <View>
                      <TouchableOpacity
                        style={{ ...tw` p-1  bg-green-600 rounded-xl w-25` }}
                        onPress={()=>dispatch(addToCart(item))}
                      >
                        <Text style={{ ...tw`text-lg text-center` }}>
                          Add To Cart
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {item.qty == 0 ? null : (
                      <View style={{ ...tw`flex-row items-center` }}>
                        <TouchableOpacity
                          style={{
                            ...tw` px-4 py-2  bg-green-600 rounded-full `,
                          }}
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
{
  cartData.length !=0?
        <View style={{...tw`bg-green-600   w-90 absolute bottom-20  flex-row items-center justify-between z-10 mx-7 rounded-full p-3 `}}>
<View style={{...tw` items-center`}}>
<Text style={{ ...tw`text-lg text-white  pl-2 pt-1 ` }}>Cart Items ({cartData.length})</Text>
<Text>Total:{totalVal()}</Text>
</View>
<View style={{...tw`px-2 mx-3 `}}>
          <TouchableOpacity onPress={()=>navigation.navigate("cart",data)}>
            <Text style={{ ...tw`text-lg text-white  mr-10 bg-green-500 px-3 py-1 mx-auto` }}>Cart</Text>
          </TouchableOpacity>
        </View>
        </View>:""
       
}

       
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"center",
    // alignContent:"center",
    // margin:"auto"
  },
});

export default HomeScreen;

