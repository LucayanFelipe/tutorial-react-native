import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, ScrollView, Image } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const DemoScreen = ({ route }) => {
  const { lessonId } = route.params;
  const { colors, isDarkMode, toggleTheme } = useTheme();
  const [text, setText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const renderDemo = () => {
    switch (lessonId) {
      case '1':
        return (
            <View>
            <Image source={require('../../assets/react.png')} style={{width:125, height:120, marginTop:50, marginLeft:110, marginBottom:60}} ></Image>
            <Text style={[styles.demoText, { color: colors.text }]}>
            
              📱 <Text style={{ fontWeight: 'bold' }}>React Native</Text> é um framework criado pelo Facebook que permite criar aplicativos móveis nativos para Android e iOS usando <Text style={{ fontWeight: 'bold' }}>JavaScript</Text> e <Text style={{ fontWeight: 'bold' }}>React</Text>.
              {"\n\n"}Ele permite reutilizar código e lógica de interface com uma experiência próxima de apps nativos.
            </Text>
            
          </View>
        );
        case '2':
          return (
            <ScrollView>
              <Text style={[styles.demoText, { color: colors.text }]}>
                ⚙️ <Text style={{ fontWeight: 'bold' }}>Componentes básicos:</Text>
              </Text>
        
              {/* View */}
              <Text style={{ color: colors.text }}>
                • <Text style={{ fontWeight: 'bold' }}>View</Text>: contêiner de layout, como uma div no HTML.
              </Text>
              <Text style={styles.codeBlock}>
        {`<View style={{ padding: 10, backgroundColor: '#eee' }}>
          <Text>Conteúdo aqui</Text>
        </View>`}
              </Text>
        
              {/* Text */}
              <Text style={{ color: colors.text }}>
                • <Text style={{ fontWeight: 'bold' }}>Text</Text>: exibe textos.
              </Text>
              <Text style={styles.codeBlock}>
        {`<Text style={{ fontSize: 18 }}>Olá, mundo!</Text>`}
              </Text>
        
              {/* TextInput */}
              <Text style={{ color: colors.text }}>
                • <Text style={{ fontWeight: 'bold' }}>TextInput</Text>: campo para entrada de texto.
              </Text>
              <Text style={styles.codeBlock}>
        {`<TextInput
          placeholder="Digite algo"
          style={{ borderWidth: 1, padding: 8 }}
        />`}
              </Text>
        
              {/* Button */}
              <Text style={{ color: colors.text }}>
                • <Text style={{ fontWeight: 'bold' }}>Button</Text>: botão básico para ações.
              </Text>
              <Text style={styles.codeBlock}>
        {`<Button
          title="Clique aqui"
          onPress={() => alert('Botão pressionado')}
        />`}
              </Text>
        
              {/* Image */}
              <Text style={{ color: colors.text }}>
                • <Text style={{ fontWeight: 'bold' }}>Image</Text>: exibe uma imagem.
              </Text>
              <Text style={styles.codeBlock}>
        {`<Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={{ width: 50, height: 50 }}
        />`}
              </Text>
        
              {/* ScrollView */}
              <Text style={{ color: colors.text }}>
                • <Text style={{ fontWeight: 'bold' }}>ScrollView</Text>: permite rolagem do conteúdo.
              </Text>
              <Text style={styles.codeBlock}>
        {`<ScrollView>
          <Text>Conteúdo rolável...</Text>
        </ScrollView>`}
              </Text>
        
              {/* TouchableOpacity */}
              <Text style={{ color: colors.text }}>
                • <Text style={{ fontWeight: 'bold' }}>TouchableOpacity</Text>: botão personalizável.
              </Text>
              <Text style={styles.codeBlock}>
        {`<TouchableOpacity onPress={() => alert('Toque!')}>
          <Text>Toque aqui</Text>
        </TouchableOpacity>`}
              </Text>
        
              {/* FlatList */}
              <Text style={{ color: colors.text }}>
                • <Text style={{ fontWeight: 'bold' }}>FlatList</Text>: lista eficiente para muitos itens.
              </Text>
              <Text style={styles.codeBlock}>
        {`<FlatList
          data={[{ id: '1', title: 'Item 1' }]}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={item => item.id}
        />`}
              </Text>
            </ScrollView>
          );        
          case '3':
            return (
              <View>
                <Text style={[styles.demoText, { color: colors.text }]}>
                  ✍️ <Text style={{ fontWeight: 'bold' }}>TextInput</Text> permite que o usuário digite dados. 
                  O conteúdo é armazenado em um estado com <Text style={{ fontWeight: 'bold' }}>useState </Text> 
                  que pode ser exibido dinamicamente.
                </Text>
          
                <Text style={{ color: colors.text, marginBottom: 10, fontFamily: 'monospace' }}>
                  {`const [text, setText] = useState('');

<Text style={{ color: colors.text }}>Você digitou: {text}</Text>
                  `}
                </Text>
          
                <TextInput
                  style={[styles.input, { color: colors.text, borderColor: colors.text }]}
                  onChangeText={setText}
                  value={text}
                  placeholder="Digite algo"
                  placeholderTextColor={colors.text}
                />
                <Text style={{ color: colors.text }}>Você digitou: {text}</Text>
              </View>
            );
          
            case '4':
  return (
    <View>
      <Text style={[styles.demoText, { color: colors.text }]}>
        🎛️ Com o componente <Text style={{ fontWeight: 'bold' }}>Switch</Text>, você pode alternar entre dois estados 
        e aplicar estilos dinamicamente com base em condições.
      </Text>

      <Text style={{ color: colors.text, marginBottom: 10, fontFamily: 'monospace' }}>
        {`const [isEnabled, setIsEnabled] = useState(false);\n\nconst toggleSwitch = () => setIsEnabled(previous => !previous);`}
      </Text>

      <Text style={{ color: colors.text, marginBottom: 10, fontFamily: 'monospace' }}>
{`<Switch
  trackColor={{ false: '#767577', true: colors.primary }}
  thumbColor={isEnabled ? colors.secondary : '#f4f3f4'}
  onValueChange={toggleSwitch}
  value={isEnabled}
/>`}
      </Text>

      <Switch
        trackColor={{ false: '#767577', true: colors.primary }}
        thumbColor={isEnabled ? colors.secondary : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      <Text style={[styles.demoText, {
        fontWeight: isEnabled ? 'bold' : 'normal',
        fontSize: isEnabled ? 20 : 16,
        color: isEnabled ? colors.primary : colors.text
      }]}>
        Texto estilizado dinamicamente
      </Text>
    </View>
  );

            
      default:
        return null;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {renderDemo()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  demoText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  codeBlock: {
    backgroundColor: '#222',
    color: '#0f0',
    fontFamily: 'monospace',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  
});

export default DemoScreen;