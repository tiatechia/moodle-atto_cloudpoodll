<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Privacy Subsystem implementation
 *
 * @package    atto_cloudpoodll
 * @copyright  2018 Justin Hunt <justin@poodll.com,>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace atto_cloudpoodll\privacy;
use \core_privacy\local\metadata\collection;
use \core_privacy\local\request\contextlist;
use \core_privacy\local\request\approved_contextlist;
use \core_privacy\local\request\userlist;
use \core_privacy\local\request\approved_userlist;

//3.3 user_provider not backported so we use this switch to avoid errors when using same codebase for 3.3 and higher
if (interface_exists('\core_privacy\local\request\core_userlist_provider')) {
    interface the_user_provider extends \core_privacy\local\request\core_userlist_provider{}
} else {
    interface the_user_provider {};
}


defined('MOODLE_INTERNAL') || die();

/**
 * Privacy Subsystem for atto_cloudpoodll
 *
 * @copyright  2018 Justin Hunt <justin@poodll.com,>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class provider implements
    // This plugin does store personal user data.
    \core_privacy\local\metadata\provider,
    // The Atto editor provides data directly to core.
    \core_privacy\local\request\plugin\provider,
    //user provider 3.4 and above
    the_user_provider{

    use \core_privacy\local\legacy_polyfill;

    public static function _get_metadata(collection $collection){

        $collection->add_external_location_link('cloud.poodll.com', [
            'userid' => 'privacy:metadata:cloudpoodllcom:userid'
        ], 'privacy:metadata:cloudpoodllcom');

        return $collection;
    }

    /**
     * Get the list of contexts that contain user information for the specified user.
     *
     * @param   int $userid The user to search.
     * @return  contextlist   $contextlist  The contextlist containing the list of contexts used in this plugin.
     */
    public static function _get_contexts_for_userid($userid) {
        return new contextlist();
    }

    /**
     * Export all user data for the specified user, in the specified contexts.
     *
     * @param   approved_contextlist $contextlist The approved contexts to export information for.
     */
    public static function _export_user_data($contextlist) {
    }

    /**
     * Delete all data for all users in the specified context.
     *
     * @param   context $context The specific context to delete data for.
     */
    public static function _delete_data_for_all_users_in_context($context) {
    }

    /**
     * Delete all user data for the specified user, in the specified contexts.
     *
     * @param   approved_contextlist $contextlist The approved contexts and user information to delete information for.
     */
    public static function _delete_data_for_user($contextlist) {
    }

    /**
     * Get the list of users who have data within a context.
     *
     * @param   userlist    $userlist   The userlist containing the list of users who have data in this context/plugin combination.
     */
    public static function get_users_in_context(userlist $userlist) {

    }

    /**
     * Delete multiple users within a single context.
     *
     * @param   approved_userlist       $userlist The approved context and user information to delete information for.
     */
    public static function delete_data_for_users(approved_userlist $userlist) {

    }
}
