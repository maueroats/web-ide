/********************************************************************************
 * The contents of this file are subject to the GNU General Public License      *
 * (GPL) Version 2 or later (the "License"); you may not use this file except   *
 * in compliance with the License. You may obtain a copy of the License at      *
 * http://www.gnu.org/copyleft/gpl.html                                         *
 *                                                                              *
 * Software distributed under the License is distributed on an "AS IS" basis,   *
 * without warranty of any kind, either expressed or implied. See the License   *
 * for the specific language governing rights and limitations under the         *
 * License.                                                                     *
 *                                                                              *
 * This file was originally developed as part of the software suite that        *
 * supports the book "The Elements of Computing Systems" by Nisan and Schocken, *
 * MIT Press 2005. If you modify the contents of this file, please document and *
 * mark your changes clearly, for the benefit of others.                        *
 ********************************************************************************/

package org.nand2tetris.hack.simulators.gates;

import java.util.HashSet;

/**
 * A set of Connection objects.
 */
public class ConnectionSet extends HashSet<Connection> {

    private static final long serialVersionUID = 1224935961384641347L;

    /**
     * Constructs a new ConnectionSet
     */
    public ConnectionSet() {
        super();
    }

    /**
     * Adds the given connection to the set.
     */
    public boolean add(Connection connection) {
        return super.add(connection);
    }

    /**
     * Removes the given connection from the set.
     */
    public boolean remove(Connection connection) {
        return super.remove(connection);
    }

    /**
     * Returns true if this set contains the given connection.
     */
    public boolean contains(Connection connection) {
        return super.contains(connection);
    }
}