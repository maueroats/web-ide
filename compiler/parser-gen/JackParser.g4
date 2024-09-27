parser grammar JackParser;

options {
	tokenVocab = JackLexer;
}

program: classDeclaration EOF;

classDeclaration:
	CLASS className LBRACE classVarDec* subroutineDeclaration* RBRACE;
className: IDENTIFIER;
classVarDec:
	STATIC fieldList SEMICOLON	# staticFieldDeclaration
	| FIELD fieldList SEMICOLON	# fieldDeclaration;
fieldList: varType fieldName ( COMMA fieldName)*;
fieldName: IDENTIFIER;
subroutineDeclaration:
	CONSTRUCTOR subroutineDecWithoutType	# constructor
	| METHOD subroutineDecWithoutType		# method
	| FUNCTION subroutineDecWithoutType		# function;
subroutineDecWithoutType:
	subroutineReturnType subroutineName LPAREN parameterList RPAREN subroutineBody;
 subroutineName: IDENTIFIER;
subroutineReturnType: varType | VOID;

varType: INT | CHAR | BOOLEAN | IDENTIFIER;

parameterList: (parameter (COMMA parameter)*)?;
parameter: varType parameterName;
parameterName: IDENTIFIER;
subroutineBody:
	LBRACE varDeclaration* statements RBRACE;

varDeclaration: VAR varType varNameInDeclaration (COMMA varNameInDeclaration)* SEMICOLON;
varNameInDeclaration: IDENTIFIER;
varName: IDENTIFIER;
statements: statement*;
statement:
	letStatement
	| ifStatement
	| whileStatement
	| doStatement
	| returnStatement;

letStatement:
	LET (varName | arrayAccess) EQUALS expression SEMICOLON; //TODO: check right assoc for this

ifStatement:
	IF LPAREN expression RPAREN LBRACE statements RBRACE (
		ELSE LBRACE statements RBRACE
	)?;

whileStatement:
	WHILE LPAREN expression RPAREN LBRACE statements RBRACE;

doStatement: DO subroutineCall SEMICOLON;

subroutineCall:
	subroutineName LPAREN expressionList RPAREN
	| (className | THIS_LITERAL) DOT subroutineName LPAREN expressionList RPAREN;

returnStatement: RETURN expression? SEMICOLON;

expressionList: (expression (COMMA expression)*)?;

expression:
	binaryOperation = expression binaryOperator expression
	| constant
	| varName
	| subroutineCall
	| arrayAccess
	| unaryOp
	| groupedExpression;

groupedExpression: LPAREN expression RPAREN;
unaryOp: unaryOperator expression;
arrayAccess: varName LBRACKET expression RBRACKET;

constant:
	INTEGER_LITERAL
	| STRING_LITERAL
	| BOOLEAN_LITERAL
	| NULL_LITERAL
	| THIS_LITERAL;

unaryOperator: TILDE | MINUS;
binaryOperator:
	PLUS
	| MINUS
	| MUL
	| DIV
	| AND
	| OR
	| LESS_THAN
	| GREATER_THAN
	| EQUALS;