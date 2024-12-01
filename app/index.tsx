import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	TouchableWithoutFeedback,
	ScrollView,
} from 'react-native';
import '../styles/global.css';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
	const [rating, setRating] = useState(0); // Estado para armazenar a avaliação
	const [comment, setComment] = useState(''); // Estado para o comentário

	// Função para atualizar a avaliação
	const handleRating = (index: number) => {
		setRating(index + 1); // Atualiza com o índice +1, pois começa de 0
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView contentContainerStyle={styles.scrollContent}>
					<View style={styles.header}>
						<ThemedText type="title" style={styles.title}>
							Avalie a Aula
						</ThemedText>
						<Text style={styles.subtitle}>
							Sua opinião é essencial para a melhoria contínua das aulas.
						</Text>
					</View>

					<View style={styles.ratingSection}>
						<Text style={styles.sectionTitle}>Escolha uma nota:</Text>
						<View style={styles.starsContainer}>
							{[...Array(5)].map((_, index) => (
								<TouchableOpacity
									key={index}
									onPress={() => handleRating(index)}
								>
									<IconSymbol
										size={48}
										name={index < rating ? 'star.fill' : 'star'}
										color={'#facc15'}
									/>
								</TouchableOpacity>
							))}
						</View>
					</View>

					<View style={styles.commentSection}>
						<Text style={styles.sectionTitle}>Deixe seu comentário:</Text>
						<TextInput
							style={styles.input}
							placeholder="Digite aqui o que achou da aula..."
							placeholderTextColor="#aaa"
							value={comment}
							onChangeText={setComment}
							multiline
							numberOfLines={4}
						/>
					</View>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Enviar Avaliação</Text>
					</TouchableOpacity>

					<View style={styles.footer}>
						<Text style={styles.footerText}>
							Obrigado por nos ajudar a melhorar!
						</Text>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1e293b', // Fundo escuro
	},
	scrollContent: {
		flexGrow: 1,
		justifyContent: 'space-between',
		padding: 20,
	},
	header: {
		marginTop: 30,
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		color: '#f8fafc',
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		color: '#94a3b8',
		textAlign: 'center',
		marginBottom: 20,
	},
	ratingSection: {
		marginTop: 20,
		alignItems: 'center',
	},
	sectionTitle: {
		fontSize: 18,
		color: '#f8fafc',
		marginBottom: 10,
	},
	starsContainer: {
		flexDirection: 'row',
		marginVertical: 15,
	},
	commentSection: {
		marginTop: 20,
	},
	input: {
		width: '100%',
		backgroundColor: '#334155',
		color: '#f8fafc',
		borderRadius: 8,
		padding: 15,
		fontSize: 16,
		marginVertical: 10,
	},
	button: {
		backgroundColor: '#0ea5e9',
		borderRadius: 8,
		paddingVertical: 15,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	buttonText: {
		color: '#f8fafc',
		fontSize: 16,
		fontWeight: 'bold',
	},
	footer: {
		marginTop: 30,
		marginBottom: 15,
		alignItems: 'center',
	},
	footerText: {
		fontSize: 14,
		color: '#94a3b8',
		textAlign: 'center',
	},
});
