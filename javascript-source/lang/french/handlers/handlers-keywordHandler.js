/*
 * Copyright (C) 2016-2021 phantombot.github.io/PhantomBot
 *
 * Ce programme est un logiciel libre : vous pouvez le redistribuer et/ou le modifier
 * sous les termes de la licence publique générale GNU telle que publiée par
 * la Free Software Foundation, soit la version 3 de la Licence, soit
 * (à votre choix) toute version ultérieure.
 *
 * Ce programme est distribué dans l'espoir qu'il sera utile,
 * mais SANS AUCUNE GARANTIE ; sans même la garantie implicite de
 * QUALITÉ MARCHANDE ou ADAPTATION À UN USAGE PARTICULIER. Voir le
 * Licence publique générale GNU pour plus de détails.
 *
 * Vous devriez avoir reçu une copie de la licence publique générale GNU
 * avec ce programme. Si ce n'est pas le cas, consultez <http://www.gnu.org/licenses/>.
 */

$.lang.register('keywordhandler.add.usage', 'Usage: !keyword add [flags] [keyword] [response]. Les drapeaux peuvent être vides ou n\'importe quelle combinaison de "--regex", "--case-sensible ".');
$.lang.register('keywordhandler.keyword.404', 'Ce mot clé n\'existe pas.');
$.lang.register('keywordhandler.keyword.added', 'mot clé "$1" ajouté !');
$.lang.register('keywordhandler.keyword.removed', 'le mot clé "$1" a été supprimé !');
$.lang.register('keywordhandler.keyword.usage', 'Utilisation : !keyword [ajouter / supprimer / cooldown] [keyword]');
$.lang.register('keywordhandler.remove.usage', 'Utilisation : !keyword remove [keyword]');
$.lang.register('keywordhandler.cooldown.usage', 'Utilisation : !keyword cooldown [mot-clé] [secondes] - Utilisez -1 pour supprimer un temps de recharge.');
$.lang.register('keywordhandler.cooldown.removed', 'Le temps de recharge pour le mot-clé $1 a été supprimé.');
$.lang.register('keywordhandler.cooldown.set', 'Le temps de recharge pour le mot-clé $1 a été défini sur $2 secondes.');