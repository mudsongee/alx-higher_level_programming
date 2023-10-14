<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'holberton');

/** MySQL database password */
define('DB_PASSWORD', 'holberton');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Pb(wKoVf@@v4HQgO>oa}{cT|0P)N>c`d_5ACV^x*O{&By,t?,zCt>(BrqE`=@aA ');
define('SECURE_AUTH_KEY',  'C6nbEIe!:[y(Q*~PL]Y2|Tz=Z=0H;suE`Y0:Mr8%dlUP<i>Y8v*Yz,B O#F4?y+.');
define('LOGGED_IN_KEY',    ',=AvS|vMDU_0}2knl-w4paHAri`t/6}e^7A3,< vSWG%J.?F<rz/1<GElb$UKZSx');
define('NONCE_KEY',        'fWeCJ@#hLO(j!!m%5i_m1azo#B6k2-0lE0qZ63MvC==+]HE(T*{gk0iY:hakLRyB');
define('AUTH_SALT',        'bj%(q3^oIkrlK]9Rv_<npg$VM][RPj_*1`x&/V~7ky$FHRyd>3z!x),GI6f<O(J0');
define('SECURE_AUTH_SALT', 'wC;3[EF~]xvLHXU_A_>x(-gw*kvb4T_X|@n36v3kx#H%HFVsVW`3<93rdhaDlF~i');
define('LOGGED_IN_SALT',   'RL*Cq{{wbwA&@#p;s#QF/a49h(@gz=?@qp%b~Qy>ena(-GLL1~+0`oHguu`[[@_l');
define('NONCE_SALT',       '%,xpb|_xOD[Do!{uX?g^r2{^W?A6H#E]hv+&EG$,8@%bI 6~3?y;`SNg.[47`tMl');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

