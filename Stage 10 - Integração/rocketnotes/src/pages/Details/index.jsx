import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Container, Links, Content } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  async function handleDelete(){
    const confirm = window.confirm("Deseja realmente excluir a nota? ");

    if(confirm){
      try{
        await api.delete(`/notes/${params.id}`);
        alert("Nota excluída com sucesso!");
      }catch(error){
        alert(`Erro durante a exclusão da nota: ${error.description}`);
      }    

      navigate(-1);
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        {
          data &&
          <Content>  
            <ButtonText 
              title="Excluir a nota" 
              isActive 
              onClick={handleDelete}
            />
            <h1>
              {data.title}
            </h1>
            <p>
              {data.description}
            </p>

            <Section title="Links Úteis">
              { 
                data.links &&
                data.links.map(link => (
                  <Links key={link.id}>
                    <li>
                      <a href={link.url} target='_blank'>
                        {link.url}
                      </a>
                    </li>                  
                  </Links>
                ))                
              }
            </Section>
            <Section title="Marcadores">
              {
                data.tags &&
                data.tags.map(tag => (
                  <Tag 
                    key={tag.id}
                    title={tag.name} 
                  />  
                ))
                
              }            
            </Section>    
                
          </Content> 
        }         
      </main>  
      <footer>
        <Content>
          <Button 
            title="Voltar"
            onClick={() => { navigate(-1) } }
          /> 
        </Content>
      </footer>
    </Container>
  )
}