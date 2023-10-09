import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, ImageBackground, Pressable } from 'react-native';
import styles from './styles';

const backgroundImage = require('../../../assets/img-background2.jpg'); 

function GitProfile() {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (username.trim() === '') {
      alert('Por favor, insira um nome de usuário válido.');
      return;
    }

    setLoading(true);

    // Realize a solicitação à API do GitHub para obter o perfil do usuário
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status === 404) {
          alert('Usuário não encontrado no GitHub.');
          throw new Error('Usuário não encontrado');
        }
        if (!response.ok) {
          alert('Ocorreu um erro ao buscar o perfil do GitHub.');
          throw new Error('Erro ao buscar perfil');
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
        setLoading(false);

        fetch(data.repos_url)
          .then((response) => {
            if (!response.ok) {
              alert('Ocorreu um erro ao buscar os repositórios do usuário.');
              throw new Error('Erro ao buscar repositórios');
            }
            return response.json();
          })
          .then((repos) => {
            setReposData(repos);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.title}>Github Profile</Text>
        <Text style={styles.subTitle}>May the force be with you</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Github Name"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Pressable style={styles.botao} onPress={handleSearch}>
            <Text>Search</Text>
          </Pressable>
        </View>
        {loading && <Text>Carregando...</Text>}
        {profileData && !loading && (
          <View style={styles.profile}>
            <Image
              style={styles.avatar}
              source={{ uri: profileData.avatar_url }}
            />
            <Text style={styles.dataItem}>Nickname: {profileData.login}</Text>
            <Text style={styles.dataItem}>Quantidade de repositorios: {profileData.public_repos}</Text>
            <Text style={styles.dataItem}>Repositorio Link: {profileData.html_url}/?tab=repositories</Text>
          </View>
        )}
        {reposData.length > 0 && (
          <View style={styles.repositorio}>
            <Text style={styles.title}>Repositórios:</Text>
            <FlatList
              data={reposData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Text style={styles.dataItem}> - {item.name}</Text>
              )}
            />
            {profileData.login === 'ThVbs' && (
                  <h1 id="Secret">Criador dessa API </h1>
                )}
          </View>
        )}
                
      </View>
    </View>
    </ImageBackground>
  );
}

export default GitProfile;
