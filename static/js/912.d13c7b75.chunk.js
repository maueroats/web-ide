"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[912],{3912:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});var n=i(4216),s=i(864);const a=()=>(0,s.jsx)("div",{style:{overflowY:"scroll"},children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)(n.Z,{children:"**The Hardware Simulator** is used for building and testing all the chips discussed in Nand to Tetris projects 1, 2, 3, and 5. Each chip is defined in a chipName.hdl file, and the most recent versions of these files are autosaved and persisted in your browser memory. This means that the next time you will use the hardware simulator, you will see the most recent versions of these files.\n\n**Submitting HDL files:** If the course that you take requires submitting HDL files (e.g. for grading), you can write and test the files using this hardware simulator. When a chip passes its tests, you can copy its HDL code from the simulator\u2019s editor panel and paste it into any standard text editor.\nThe simulator features three panels (from left to right): an HDL editor, a pins panel, and a test panel.\n\n##### **HDL editor** (left panel)\n\nTo build or edit a chip (HDL program), select the chip name from the Project menu and the menu right next to it. This results in three actions: (i) the chipName.hdl file is loaded into the editor; (ii) the chip\u2019s pin names are displayed in the middle panel, and (iii) the chip\u2019s test script is displayed in the right panel. Any change that you make to the HDL code is saved automatically.\n\n**Builtin chips:** Each chip in projects 1, 2, 3 and 5 has a builtin version. The builtin version features the chip\u2019s interface, and a builtin implementation which is part of the simulator\u2019s software. The builtin version allows users to experiment with the chip\u2019s operations before implementing it in HDL. To do so, select the BuiltIn toggle and test the chip using either interactive or script-based simulation (described next).\n\n##### **Pins panel** (in the middle)\n\nDisplays the names of the chip\u2019s pins (input, output, internal), and their current values. The current pin values are computed by the chip logic when the user clicks the Eval button, or when an \u201ceval\u201d command is executed in the chip\u2019s test script. If a pin\u2019s width is more than one bit, a dec/bin toggle allows displaying its value in either a decimal or a binary format. To \u201cevaluate a chip\u201d, change one or more of its input pins, and click the Eval button.\n\n**The clock and reset buttons** are enabled only for sequential chips. A chip is said to be sequential if it contains a sequential chip-part, or one of its chip-parts contains a sequential chip-part. The DFF chip is sequential. Therefore, all the chips that use a DFF directly or indirectly are sequential. Clicking the clock button advances the clock forward in either one tick or one tock. The resulting time step is displayed. Clicking the reset button resets the clock.\n\n**Chip visualizations:** Some builtin chips have optional visualizations, which are displayed automatically by the simulator (and can be turned off by the user). The chip visualizations provide helpful information about some of the chips. For example, the ALU visualization displays the name of the operation that the ALU performs, and the visualizations of the memory chips display their internal states. We use this information to illustrate the intended chips\u2019 behavior.\n\n##### **Test panel** (on the right)\n\nThe test panel displays the test script that we supply for the loaded chip. The \u201ccurrent command\u201d, which is highlighted in yellow, is the test script command that will be executed next. To test a chip, use the step button (executes the current command), run button (executes the entire test script, from the current command onward), or the reset button (makes the first command in the script the current command).\n\nThe compare file (if one is supplied) and the output file generated by the test script can be displayed by clicking the respective tabs.\n\nThe test script can be edited, but it is recommended to start testing the chip using the supplied script. Changes made to the test script (if any) are not saved.\n\n**Bug / issue reports**\nIf you wish to report a bug or propose how to improve something, click the bug icon and write your bug/issue description. You will be asked to login into your GitHub account (if you have one).\n"})})})},4216:(e,t,i)=>{i.d(t,{Z:()=>h});var n=i(5600),s=i(8404),a=i(6415),o=i(864);const r=e=>(e=e.replace("%25PUBLIC_URL%25","/web-ide"),(0,n.A)(e)),h=e=>{let{children:t}=e;return(0,o.jsx)(s.D,{remarkPlugins:[a.Z],transformImageUri:r,children:t})}}}]);