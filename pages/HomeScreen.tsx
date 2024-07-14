import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  return (
    <View>
      <View style={styles.free_elementview}>
        <Text style={styles.free_element}>TRABALHOS DÍSPONÍVEIS</Text>
      </View>
      <View style={styles.projectsview}>
        <View>
          <View style={styles.project}>
            <Text style={{ marginBottom: 5, backgroundColor: "orange", width: 120, padding: 4, borderRadius: 7 }}>
              <FontAwesome5 name="fire" size={20} color="red" /> Última Chance
            </Text>
            <Text>Desenvolvimento de Games - Online</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text><AntDesign name="user" size={20} color="black" /> Lucas Gomes</Text>
              <Text style={{ marginLeft: 70 }}><MaterialIcons name="computer" size={20} color="black" /> Serviço Online</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "green", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={{ color: "white", fontSize: 13, padding: 4 }}>
              Seja o primeiro a liberar esse pedido!
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <View style={styles.project}>
            <Text style={{ marginBottom: 5, backgroundColor: "orange", width: 120, padding: 4, borderRadius: 7 }}>
              <FontAwesome5 name="fire" size={20} color="red" /> Última Chance
            </Text>
            <Text>Descarregar 20 toneladas de areia meio dia</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text><AntDesign name="user" size={20} color="black" /> Pedro Souza</Text>
              <Text style={{ marginLeft: 70 }}><MaterialIcons name="computer" size={20} color="black" /> Serviço Escravo</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "green", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={{ color: "white", fontSize: 13, padding: 4 }}>
              Seja o primeiro a liberar esse pedido!
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <View style={styles.project}>
            <Text style={{ marginBottom: 5, backgroundColor: "orange", width: 120, padding: 4, borderRadius: 7 }}>
              <FontAwesome5 name="fire" size={20} color="red" /> Última Chance
            </Text>
            <Text>Gestão de Tráfego para Dentista - Online</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text><AntDesign name="user" size={20} color="black" /> Arthur Gomes</Text>
              <Text style={{ marginLeft: 70 }}><MaterialIcons name="computer" size={20} color="black" /> Serviço Online</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "green", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={{ color: "white", fontSize: 13, padding: 4 }}>
              Seja o primeiro a liberar esse pedido!
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 15 }}>
          <View style={styles.project}>
            <Text style={{ marginBottom: 5, backgroundColor: "orange", width: 120, padding: 4, borderRadius: 7 }}>
              <FontAwesome5 name="fire" size={20} color="red" /> Última Chance
            </Text>
            <Text>Copywriting para Anúncios Online</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text><AntDesign name="user" size={20} color="black" /> Alexandre Pereira</Text>
              <Text style={{ marginLeft: 70 }}><MaterialIcons name="computer" size={20} color="black" /> Serviço Online</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "green", alignItems: "center", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
            <Text style={{ color: "white", fontSize: 13, padding: 4 }}>
              Seja o primeiro a liberar esse pedido!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  free_element: {
    marginLeft: 100,
    marginTop: 25,
    fontSize: 16,
    paddingBottom: 5,
  },
  free_elementview: {
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  projectsview: {
    marginTop: 13,
    width: 370,
    marginLeft: 12,
  },
  project: {
    borderLeftColor: "grey",
    borderLeftWidth: 1,
    borderRightColor: "grey",
    borderRightWidth: 1,
    borderTopColor: "grey",
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 7,
    height: 115,
    justifyContent: "center",
  },
  image: {
    width: 200,
  },
});
