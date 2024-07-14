import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function CoinsScreen() {
    return(
    <View>
            <View style={{ alignItems: "center", backgroundColor: "white", height: 90, justifyContent: "center"}}> 
            <Text style={{ fontSize: 20 }}>
                Moedas
            </Text>
            <View style={styles.CoinsView}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name="coins" size={17} color="#FFA800" />
                    <Text style={{marginLeft: 8}}>0</Text> 
                </View>
                <View style={{ flexDirection: "row", marginLeft: 15 }}>
                    <Text style={{marginRight: 8}}>Moedas</Text>
                </View>
            </View>
        </View>
    <View style={{justifyContent: "center", alignItems: "center", marginTop: 30}}>
            <Text style={{fontSize: 17}}>Escolha um dos pacotes abaixo:</Text>
        <View style={styles.CoinPacksView}>
            <View style={styles.CoinPack}>
                <View style={{marginLeft: 20}}>
                    <FontAwesome name="star" size={30} color="gold" />
                </View>
                <View style={{ marginLeft: 30 }}>
                    <Text style={{marginBottom: 15, fontWeight: "bold", fontSize: 15}}>1000 Moedas</Text>
                    <Text style={{fontSize: 15}}>Valor de pacote R$149,90</Text>
                </View>
            </View>

            <View style={styles.CoinPack}>
                <View style={{marginLeft: 20}}>
                    <FontAwesome name="star" size={30} color="gold" />
                </View>
                <View style={{ marginLeft: 30 }}>
                    <Text style={{marginBottom: 15, fontWeight: "bold", fontSize: 15}}>2000 Moedas</Text>
                    <Text style={{fontSize: 15}}>Valor de pacote R$299,90</Text>
                </View>
            </View>

            <View style={styles.CoinPack}>
                <View style={{marginLeft: 20}}>
                    <FontAwesome name="star" size={30} color="gold" />
                </View>
                <View style={{ marginLeft: 30 }}>
                    <Text style={{marginBottom: 15, fontWeight: "bold", fontSize: 15}}>4000 Moedas</Text>
                    <Text style={{fontSize: 15}}>Valor de pacote R$599,90</Text>
                </View>
            </View>
        </View>
    </View>
</View>
    )
}

const styles = StyleSheet.create({
    CoinsView: {
        flexDirection: "row", 
        marginTop: 15, 
        backgroundColor: "#FFF786", 
        width: 145, height: 30, 
        alignItems: "center", 
        justifyContent: 'center', 
        borderRadius: 20
    },

    CoinPacksView: {
        marginTop: 10,
    },

    CoinPack: {
        flexDirection: "row",
        alignItems: "center",
        width: 350,
        backgroundColor: "white",
        height: 100,
        borderRadius: 10,
        marginTop: 15,
    },
})
