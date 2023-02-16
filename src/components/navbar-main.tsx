import { IoAdd, IoLogoGithub } from 'react-icons/io5'
import Button from './design-system/button'
import styles from './navbar.module.css'
import SprigIcon from './design-system/sprig-icon'

interface MainNavbarProps {
	loggedIn: 'partial' | 'full' | 'none'
	transparent?: boolean
}

export default function MainNavbar(props: MainNavbarProps) {
	return (
		<nav class={`${styles.container} ${props.transparent ? styles.transparent : ''}`}>
			<ul class={styles.navlinks}>
				<li class={styles.logo}><a href='/'><SprigIcon /> Sprig</a></li>
				{props.loggedIn === 'full' ? (
					<li>
						<a href='/~'>Your Games</a>
					</li>
				) : null}
				<li><a href='/gallery'>Gallery</a></li>
				<li><a href='/get'>Get a Sprig</a></li>
			</ul>
			<ul class={styles.rightActions}>
				<li class={styles.actionIcon}>
					<a href='https://github.com/hackclub/sprig/' target='_blank'>
						<IoLogoGithub />
					</a>
				</li>
				{props.loggedIn === 'full' ? (
					<li>
						<a href='/~/new'><Button icon={IoAdd}>New Game</Button></a>
					</li>
				) : (
					<li>
						<a href='/editor'><Button>Open Editor</Button></a>
					</li>
				)}
			</ul>
		</nav>
	)
}