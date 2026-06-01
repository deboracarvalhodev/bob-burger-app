import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  content: {
    flex: 1,
    padding: 20,
  },

  containerTitle: {
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Fredoka_600SemiBold',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#222',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  imgTitle: {
    width: '25%',
    height: '100%',
  },

  text: {
    fontSize: 16,
    color: '#333',
  },

  // HEADER
  containerHeader: {
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 50,
  },

  leftContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoHeader: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  titleHeader: {
    fontFamily: 'Fredoka_600SemiBold',
    fontSize: 20,
    color: '#FFF',
  },

  cartBtnHeader: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 5,
  },

  // BARRA DE PESQUISA
  searchBar: {
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#222',
  },

  searchInput: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    color: '#222',
  },

  // TELA WELCOME
  welcomeContainer: {
    flex: 1,
  },

  welcomeBackground: {
    flex: 1,
  },

  welcomeOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  welcomeTitle: {
    fontFamily: 'Fredoka_600SemiBold',
    color: '#D5B417',
    fontSize: 54,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  welcomeButton: {
    backgroundColor: '#FFF',
    paddingVertical: 18,
    margin: 20,
    bottom: 45,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },

  welcomeButtonText: {
    fontFamily: 'Fredoka_600SemiBold',
    fontSize: 18,
    color: '#222',
  },

  // TELA PERFIL
  profileCard: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    marginTop: '15%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#222',
  },

  profileImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#222',
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginVertical: 6,
    padding: 8,
    borderWidth: 1,
    borderColor: '#222',
    borderRadius: 30,
    gap: 8,
  },

  infoIcon: {
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 8,
  },

  infoText: {
    fontSize: 14,
    color: '#222',
    fontFamily: 'Poppins_400Regular',
  },

  // CARD PRODUTO
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#222',
    margin: 8,
    overflow: 'hidden',
    elevation: 3,
  },

  imageContainer: {
    position: 'relative',
  },

  cardImage: {
    width: '100%',
    height: 120,
  },

  cardHeartBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 6,
    borderRadius: 20,
  },

  cardContent: {
    padding: 10,
  },

  cardTitle: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  cardRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  cardRating: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#222',
    marginTop: 2,
  },

  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  cardPrice: {
    fontFamily: 'Fredoka_600SemiBold',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#222',
  },

  cardCartBtn: {
    backgroundColor: '#222',
    padding: 6,
    borderRadius: 8,
  },

  // COMPONENTE DE RESULTADO NÃO ENCONTRADO
  containerNotFound: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    gap: 8,
  },

  imgNotFound: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },

  textNotFound: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#222',
  },
});
