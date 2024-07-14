import { View, Text, StyleSheet, Image } from 'react-native'
import { MaterialCommunityIcons, FontAwesome5, AntDesign, Fontisto, MaterialIcons, Entypo } from '@expo/vector-icons'

export default function MenuScreen() {
    return(
        <View>

            <View style={{ flexDirection: "row", paddingLeft: 20, paddingTop: 20, paddingBottom: 20, backgroundColor: "#F8FB47"}}>
                <Image source={require('../img/Profile.png')} style={styles.LogoImage} />
                <View style={{ marginLeft: 20 }}>
                    <Text style={{ marginBottom: 10, fontSize: 18 }}>Arthur Gomes</Text>
                    <View>
                           <Text style={{fontSize: 17}}> 
                            Desenvolvedor Front-End
                            </Text> 
                    </View>
                </View>
            </View>
            
            <View>
                <View style={styles.myProfileTitles}>
                    <FontAwesome5 name="money-bill-wave-alt" size={20} />
                    <Text style={{marginLeft: 10, fontSize: 17}}>Minhas Negociações</Text>
                </View>
                <View style={styles.myAnnouncement}>
                    <View style={{flexDirection: "row"}}>
                        <AntDesign name="message1" size={17} />
                        <Text style={{marginLeft: 5}}>99 Serviços Negociados</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 10}}>
                        <Fontisto name="date" size={17} />
                        <Text style={{marginLeft: 5}}>Cadastrado desde Janeiro de 2024</Text>
                    </View>
                </View>
            </View>

            <View>
            <View>
                <View style={styles.myProfileTitles}>
                    <MaterialCommunityIcons name="face-man-outline" size={20} />
                    <Text style={{marginLeft: 10, fontSize: 17}}>Meu Anúncio</Text>
                </View>
                <View style={styles.myAnnouncement}>
                    <Text style={{fontWeight: "bold"}}>Titulo</Text>
                    <Text>Desenvolvedor Front-End - José Arthur</Text>
                    <Text style={{fontWeight: "bold", marginTop: 10}}>Anúncio</Text>
                    <Text>Olá, sou um programador, tenho 16 anos.</Text>
                </View>
            </View>
            </View>

            <View>
                <View style={styles.myProfileTitles}>
                    <MaterialIcons name="man" size={20} />
                    <Text style={{marginLeft: 10, fontSize: 17}}>Dados Pessoais</Text>
                </View>
                <View style={styles.myAnnouncement}>
                    <Text style={{fontWeight: "bold"}}>Nome</Text>
                    <Text>José Arthur Gomes da Costa</Text>
                    <Text style={{fontWeight: "bold", marginTop: 10}}>Email</Text>
                    <Text>dadfswfda@gmail.com</Text>
                </View>
            </View>

            <View>
                <View style={styles.myProfileTitles}>
                    <Entypo name="location-pin" size={20} />
                    <Text style={{marginLeft: 10, fontSize: 17}}>Endereço</Text>
                </View>
                <View style={styles.myAnnouncement}>
                    <Text style={{fontWeight: "bold"}}>CEP</Text>
                    <Text>12345-678</Text>
                    <Text style={{fontWeight: "bold", marginTop: 10}}>Bairro</Text>
                    <Text>Centro</Text>
                </View>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    MenuView: {
        marginTop: 20,
        marginLeft: 20,
    },

    LogoImage: {
        width: 60,
        height: 60
    },

    myAnnouncement: {
        paddingLeft: 20,
        paddingTop: 14,
        paddingBottom: 20,
        backgroundColor: "#DBDBD2"
    },

    myProfileTitles: {
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderLeftColor: "#F8FB47",
        borderLeftWidth: 5,
    }
})
