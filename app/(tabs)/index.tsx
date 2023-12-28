import {
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const { height, width } = Dimensions.get("screen");

  return (
    <SafeAreaView>
      <StatusBar/>
      <View
        style={{
          padding: 10,
          backgroundColor: "#FDFDFD",
          height,
          paddingTop: 30
        }}
      >
        <View
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F2F2F2",
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          >
            <Link href="/modal">
              <MaterialIcons
                name="menu"
                style={{
                  fontSize: 30,
                  borderRadius: 100,
                  textAlign: "center",
                }}
              />
            </Link>
          </View>
          <Image source={require("../../assets/avatar.png")} />
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            alignItems: "center",
            gap: 10,
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.9,
            shadowRadius: 2,
            elevation: 3,
          }}
        >
          <MaterialIcons
            name="search"
            style={{ fontSize: 20, color: "gray" }}
          />
          <TextInput
            style={{ fontSize: 20 }}
            placeholder="pesquisar pelo produto"
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Todos produtos
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  minWidth: 70,
                  minHeight: 30,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                  elevation: 2,
                  padding: 5,
                }}
              >
                <Text style={{ color: "black", fontSize: 20 }}>ordenar</Text>
                <MaterialIcons
                  name="sort-by-alpha"
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "black",
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  minWidth: 70,
                  minHeight: 30,
                  borderRadius: 5,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                  elevation: 2,
                  padding: 5,
                }}
              >
                <Text style={{ color: "black", fontSize: 20 }}>Filtrar</Text>
                <MaterialIcons
                  name="filter-alt"
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "black",
                  }}
                />
              </View>
            </View>
          </View>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
                shadowColor: "gray",
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
                width,
                gap: 10,
              }}
            >
              <View>
                <Image source={require("../../assets/1.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Moda
                </Text>
              </View>
              <View>
                <Image source={require("../../assets/2.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>Crianças</Text>
              </View>
              <View>
                <Image source={require("../../assets/3.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Mulheres
                </Text>
              </View>
              <View>
                <Image source={require("../../assets/4.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>Homens</Text>
              </View>
              <View>
                <Image source={require("../../assets/5.png")} />
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Beleza
                </Text>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Image
              source={require("../../assets/shop.png")}
              style={{ width: 390, height: 200, objectFit: "cover" }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
              backgroundColor: "cornflowerblue",
              borderRadius: 5,
              padding: 8,
            }}
          >
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
              >
                Destaques do dia
              </Text>
              <Text style={{ color: "white", fontWeight: "400", fontSize: 14 }}>
                22h 55m 23s restante
              </Text>
            </View>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: "white",
                  borderRadius: 8,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16,
                    minWidth: 80,
                    textAlign: "center",
                  }}
                >
                  Ver todos
                </Text>
                <MaterialIcons
                  name="arrow-right-alt"
                  style={{ fontSize: 30, color: "white" }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginVertical: 40, gap: 10 }}
          >
            <View
              style={{
                width: 170,
                backgroundColor: "white",
                borderRadius: 5,
                marginBottom: 100,
                shadowColor: "gray",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
              }}
            >
              <Image
                source={require("../../assets/shoes.png")}
                style={{ borderRadius: 5 }}
              />
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                HRX Tenis
              </Text>
              <Text style={{ marginTop: 1, fontWeight: "500" }}>
                Uma pequena descrição do produto em questão
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
                150.000,00KZ{" "}
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "red" }}
                >
                  50% off
                </Text>
              </Text>
            </View>

            <View
              style={{
                width: 170,
                backgroundColor: "white",
                borderRadius: 5,
                marginBottom: 100,
                shadowColor: "gray",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
              }}
            >
              <Image
                source={require("../../assets/shirt.png")}
                style={{ borderRadius: 5, height: 130, objectFit: "cover" }}
              />
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Shirt
              </Text>
              <Text style={{ marginTop: 1, fontWeight: "500" }}>
                Uma pequena descrição do produto em questão
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
                150.000,00KZ{" "}
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "red" }}
                >
                  50% off
                </Text>
              </Text>
            </View>

            <View
              style={{
                width: 170,
                backgroundColor: "white",
                borderRadius: 5,
                marginBottom: 100,
                shadowColor: "gray",
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.9,
                elevation: 2,
              }}
            >
              <Image
                source={require("../../assets/dress.png")}
                style={{ borderRadius: 5, height: 130, objectFit: "cover" }}
              />
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                Black Dress
              </Text>
              <Text style={{ marginTop: 1, fontWeight: "500" }}>
                Uma pequena descrição do produto em questão
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 10 }}>
                150.000,00KZ{" "}
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "red" }}
                >
                  50% off
                </Text>
              </Text>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
